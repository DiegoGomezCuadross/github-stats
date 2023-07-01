import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { GoRepo } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { RiUserHeartFill } from "react-icons/ri";
import { RiCodeBoxLine } from "react-icons/ri";
import { colors } from "../styles";

const UserImage = styled("img")`
  max-width: 150px;
  border-radius: 50%;
  border: 1px solid;
`;

const FavoriteButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.gray.medium};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const ContainerData = styled("div")`
  display: grid;
  grid-template-columns: [followers] 140px [followings] 140px;
  grid-template-rows: [public-repos] 140px [public-gists] 140px;
  gap: 17px;
  margin-left: 57px;
  margin-right: 57px;
`;

function UserData({ user, onAddFavorite, onRemoveFavorite, isFavorite }) {
  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} />
      Mark as Favorite
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} />
      Remove Favorite
    </>
  );

  return (
    <div>
      <UserImage src={user.avatar_url} />
      <h3>{user?.name}</h3>
      <p>{user?.bio}</p>
      <ContainerData>
        <p>
          <GoPeople
            style={{ width: "60px", height: "60px", color: "#2D9CDB" }}
          />
          <p>{user.followers}</p>
          <p>Followers</p>
        </p>
        <p>
          <RiUserHeartFill
            style={{ width: "60px", height: "60px", color: "orange" }}
          />
          <p>{user.following}</p>
          <p>Followings</p>
        </p>
        <p>
          <GoRepo style={{ width: "60px", height: "60px", color: "#219653" }} />
          <p>{user.public_repos}</p>
          <p>Repos</p>
        </p>
        <p>
          <RiCodeBoxLine
            style={{ width: "60px", height: "60px", color: "#828282" }}
          />
          <p>{user.public_gists}</p>
          <p>Gists</p>
        </p>
      </ContainerData>
      <FavoriteButton
        onClick={() =>
          isFavorite ? onRemoveFavorite(user) : onAddFavorite(user)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  );
}

export default UserData;
