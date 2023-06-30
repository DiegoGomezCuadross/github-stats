import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import styled from "@emotion/styled";
import { BiSolidSearch } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { colors } from "./styles";

import { useAuth } from "./context/auth-context";
import SearchPage from "./pages/search-page";


// import FavoritesPage from "./pages/favorites-page";
// import {
//   createFavorite,
//   removeFavorite,
//   getFavorites,
// } from "./services/favorites-service";

const ContainerSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background: ${colors.gray.light};
  height: 100vh;
`
const StyledNotUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 10px;
`;

const FooterWrapper = styled.footer`
  background-color: ${colors.gray.light};
  border-top: 2px solid ${colors.gray.medium};
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin: auto;
  max-witdh: 250px;
  height: 66px;
`;


function AuthenticatedApp() {
  const { logout } = useAuth();
  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   // getFavorites().then(setFavorites);
  // }, []);

  // function handleAddFavorite(pokemon) {
  //   const data = {
  //     pokemon_name: pokemon?.name,
  //     pokemon_id: pokemon.id,
  //     pokemon_type: pokemon.types[0].type?.name,
  //     pokemon_avatar_url:
  //       pokemon.sprites.other["official-artwork"].front_default,
  //   };

  //   createFavorite(data)
  //     .then((newFavorite) => setFavorites([...favorites, newFavorite]))
  //     .catch(console.log);
  // }

  // function handleRemoveFavorite(pokemon) {
  //   const favorite = favorites.find(
  //     (fav) => fav.pokemon_name === pokemon?.name
  //   );

  //   removeFavorite(favorite.id).then(() => {
  //     const newFavorites = favorites.filter(
  //       (fav) => fav.pokemon_name !== pokemon?.name
  //     );

  //     setFavorites(newFavorites);
  //   });
  // }

  return (
    <ContainerSearch>
      <div>
        <button onClick={logout}>Logout</button><br/>
        <input type="text"></input>
        <StyledNotUser>
          <BsGithub style={{width: "120px", height: "120px"}}/>
          <h3>No user...</h3>
        </StyledNotUser>
      </div>
      <FooterWrapper>
        <IconsWrapper>
          <FaUser style={{width: "42px", height: "42px"}}/>
          <BiSolidSearch style={{width: "42px", height: "42px"}}/>
          <AiFillStar style={{width: "42px", height: "42px"}}/>
        </IconsWrapper>
      </FooterWrapper>
    </ContainerSearch>
  );
}

export default AuthenticatedApp;

// return (
//   <div>
//     <button onClick={logout}>Logout</button>
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <SearchPage
//             favorites={favorites}
//             onAddFavorite={handleAddFavorite}
//             onRemoveFavorite={handleRemoveFavorite}
//           />
//         }
//       />
//       <Route
//         path="favorites"
//         element={<FavoritesPage favorites={favorites} />}
//       />
//     </Routes>
//   </div>
// );
// }
