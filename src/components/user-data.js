import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { GoRepo } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { RiUserHeartFill } from "react-icons/ri";
import { RiCodeBoxLine } from "react-icons/ri";
import { colors } from "../styles";
import { Link } from "react-router-dom";

const UserImage = styled("img")`
  max-width: 150px;
  border-radius: 50%;
  border: 1px solid;
  margin: auto;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerIcons = styled.div`
  padding: 13px 27px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
`;

const FontsNumber = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Fonts = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  margin-top: 16px;
  margin-bottom: 42px;
  margin-bottom: 42px;
  place-content: center;
`;

function UserData({
  user,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
  onGetFollowers,
  onGetFollowings,
  onGetRepositories,
}) {
  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} style={{ cursor: "pointer" }} />
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} style={{ cursor: "pointer" }} />
    </>
  );

  return (
    <div>
      <UserImage
        src={user.avatar_url}
        style={{ marginBottom: "16px", marginTop: "12px" }}
      />
      <h3
        onClick={() =>
          isFavorite ? onRemoveFavorite(user) : onAddFavorite(user)
        }
        style={{ display: "grid", placeContent: "center" }}
      >
        <p>
          {user?.name} {isFavorite ? favoriteContent : regularContent}
        </p>
      </h3>
      <p>{user?.bio}</p>
      <ContainerData>
        <Link onClick={onGetFollowers} to="/followers">
          <ContainerIcons>
            <ContainerInfo>
              <GoPeople
                style={{
                  width: "60px",
                  height: "60px",
                  color: "#2D9CDB",
                  margin: "auto",
                }}
              />
              <FontsNumber>{user.followers}</FontsNumber>
              <Fonts>Followers</Fonts>
            </ContainerInfo>
          </ContainerIcons>
        </Link>
        <Link onClick={onGetFollowings} to="/followings">
          <ContainerIcons>
            <ContainerInfo>
              <RiUserHeartFill
                style={{ width: "60px", height: "60px", color: "orange" }}
              />
              <FontsNumber>{user.following}</FontsNumber>
              <Fonts>Followings</Fonts>
            </ContainerInfo>
          </ContainerIcons>
        </Link>
        <Link onClick={onGetRepositories} to="/repos">
          <ContainerIcons>
            <ContainerInfo>
              <GoRepo
                style={{ width: "60px", height: "60px", color: "#219653" }}
              />
              <FontsNumber>{user.public_repos}</FontsNumber>
              <Fonts style={{ width: "116px" }}>Public Repos</Fonts>
            </ContainerInfo>
          </ContainerIcons>
        </Link>
        <ContainerIcons>
          <ContainerInfo>
            <RiCodeBoxLine
              style={{ width: "60px", height: "60px", color: "#828282" }}
            />
            <FontsNumber>{user.public_gists}</FontsNumber>
            <Fonts style={{ width: "116px" }}>Public Gists</Fonts>
          </ContainerInfo>
        </ContainerIcons>
      </ContainerData>
    </div>
  );
}

export default UserData;
