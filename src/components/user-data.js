import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";

import { colors } from "../styles";

const UserImage = styled("img")`
  max-width: 150px;
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

      <p>Followers: {user.followers} </p>
      <p>Followings: {user.followings}</p>
      <p>Repos: {user.public_repos}</p>
      <p>Gists: {user.public_gists}</p>

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
