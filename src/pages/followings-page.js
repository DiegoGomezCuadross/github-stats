import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { getFavorites } from "../services/favorites-service";
import { AiFillStar } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { RiSearchFill } from "react-icons/ri";
import { Footer } from "../components/footer";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 64px;
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

function FollowingsPage({ followings }) {
  console.log(followings);
  return (
    <>
      <CardWrapper>
        {followings.map((foll) => (
          <ContainerCard>
            <FavoriteCardData>
              <FavoriteImg src={foll.avatar_url} />
              <FavoriteNames>
                <p>{foll.login}</p>
              </FavoriteNames>
            </FavoriteCardData>
            <AiFillStar
              style={{ color: "#F2C94C", width: "24px", height: "24px" }}
            />
          </ContainerCard>
        ))}
      </CardWrapper>
      <Footer>
        <Link to="/profile">
          <BiSolidUser
            style={{
              width: "50px",
              height: "50px",
              color: "#828282",
            }}
          />
        </Link>
        <Link to="/">
          <RiSearchFill
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>
        <Link to="/favorites">
          <AiFillStar
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>
      </Footer>
    </>
  );
}

export default FollowingsPage;
