import { FC, useCallback, useEffect, useState } from "react";
import Card from "../../components/card/index";
import Navbar from "../../components/NavbarHome";
import { getCharacters, Character, removeCharacter } from "../../services/Api/characters"
import { App, Container, DivSearch, ButtonNext, ButtonPrevious, ButtonRemove, ButtonSearch, InputSearch, ImagenLogo, Options, ButtonCreate } from "./styles";
import Logo from './assets/Logo.png';
import { useNavigate } from "react-router-dom";


const Characters: FC = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1)
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const getCharacterList = async () => {
    setIsLoading(true)
    const character = await getCharacters();
    setCharacterList(character);
    setIsLoading(false)
  }

  const handleRemoveCharacter = async (id: number) => {
    setIsLoading(true)
    await removeCharacter(id);                            // llamamos a la funcion asincrona removeCharacter que toma la id como parametro para elimiar al personaje del almacenamiento de datos. despues con el metodo filter eliminamos el personaje de la lista actualizada de personajes.
    setCharacterList(prev => prev.filter(character => Number.parseInt(character.id) !== id));
    setIsLoading(false)
  }
  const handlegoToCreate = useCallback(() => {
    navigate("/CreateForm");
  }, [navigate]);
  
  const handleClickSearch = useCallback(async () => {
    setIsLoading(true);
    const characters = await getCharacters();
    setCharacterList(characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase()) || character.species.toLowerCase().includes(name.toLowerCase()) || character.status.toLowerCase().includes(name.toLowerCase())));    //con el metodo filter filtramos la lista basandonos si tenemos el nombre, especie o estado que escribamos en el imput.
    setIsLoading(false);
  }, [name])

  const goToDetails = useCallback(
    (characterId: string) => {
      navigate(`/CharactersDetails/${characterId}`, { replace: true });
    },
    [navigate]
  )

  useEffect(() => {
    getCharacterList();
  }, []);

  const handleNextPage = () => { setPage(page + 1) } // cuando llamamos a este funcion atraves del boton incrementamos en 1 y cambiaremos la pagina actual.
  const handlePrevPage = () => { setPage(page - 1) } // cuando llamamos a este funcion atraves del boton restaremos 1 y cambiaremos la pagina actual.

  if (isLoading) {
    return <ImagenLogo src={Logo} />

  }

  return (
    <App>
      <Navbar />
      <ButtonCreate onClick={handlegoToCreate}>Create</ButtonCreate>
      <DivSearch>
        <InputSearch type="text" value={name} placeholder="Find your favorite character..." onChange={(e) => setName(e.target.value)} />
        <ButtonSearch onClick={handleClickSearch}>🔍</ButtonSearch>

      </DivSearch>
      <Container>
        {characterList.slice((page - 1) * 20, ((page - 1) * 20) + 20).map((character, index) => (                 // para renderizar 20 personajes por paginas.
          <Card
            key={index}
            characterId={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            onClick={goToDetails}
            type="list">
            <Options>
              <ButtonRemove onClick={() => handleRemoveCharacter(Number.parseInt(character.id))}>Remove</ButtonRemove>
            </Options>
          </Card>


        ))}
        <ButtonPrevious onClick={handlePrevPage}>Previous</ButtonPrevious>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>

      </Container>
    </App>
  );
};

export default Characters;