import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { getFavorites } from "../services/favorites-service";
import { AiFillStar } from "react-icons/ai";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ;
`;
const FavoriteCardData = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const ContainerCard = styled.div`
  display: flex;
  width: 300px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
`;

const FavoriteImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const FavoriteNames = styled.div`
  display: flex;
  width: 185.134px;
  flex-direction: column;
  align-items: flex-start;
`;

function FavoritesPage({ favorites }) {
  return (
    <>
      <CardWrapper>
        {favorites.map((fav) => (
          <ContainerCard>
            <FavoriteCardData>
              <FavoriteImg src={fav.avatar_url} />
              <FavoriteNames>
                <p>{fav.name}</p>
                <p>{fav.username}</p>
              </FavoriteNames>
            </FavoriteCardData>
            <AiFillStar
              style={{ color: "#F2C94C", width: "24px", height: "24px" }}
            />
          </ContainerCard>
        ))}
      </CardWrapper>
      <Link to="/">Go back to search</Link>
    </>
  );
}

export default FavoritesPage;
