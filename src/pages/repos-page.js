import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { PiGitBranchThin } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { RiSearchFill } from "react-icons/ri";
import { Footer } from "../components/footer";
import { CardWrapper } from "./followings-page";
import { colors } from "../styles";

const icon = {
  with: "50ppx",
  height: "50px",
};

function getLanguageColor(repo) {
  const languageColors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    Ruby: "#701516",
    PHP: "#4F5D95",
    CSS: "#563d7c",
    HTML: "#e34c26",
    CSharp: "#178600",
    Go: "#00ADD8",
    TypeScript: "#2b7489",
    Swift: "#ffac45",
    Kotlin: "#F18E33",
    Rust: "#dea584",
  };

  const language = repo.language;

  if (languageColors.hasOwnProperty(language)) {
    const colorCircle = languageColors[language];
    return (
      <div
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: colorCircle,
          borderRadius: "50%",
        }}
      ></div>
    );
  }

  return (
    <div
      style={{
        width: "12px",
        height: "12px",
        backgroundColor: colors.gray.light,
        borderRadius: "50%",
      }}
    ></div>
  );
}

const ContainerCard = styled.div`
  display: flex;
  width: 320px;
  overflow: hidden;
  padding: 8px 12px;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
`;

const RepoName = styled.div`
  color: #2d9cdb;
  font-size: 16px;
  font-weight: 700;
`;
const LanguageInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
`;

const LanguageName = styled.div`
  display: flex;
  flex-direction: row;
  justify-conntent: space-between;
  gap: 4px;
  align-items: center;
`;

function RepositoriesPage({ repositories }) {
  console.log(repositories);

  const iconStyles = {
    width: "50px",
    height: "50px",
    color: "#BDBDBD",
  };

  const hoverStyles = {
    color: "#828282",
  };

  return (
    <>
      <h2
        style={{
          display: "grid",
          placeContent: "center",
          fontWeight: "400",
        }}
      >
        Public Repos ({repositories.length})
      </h2>
      <CardWrapper>
        {repositories.map((repo) => (
          <ContainerCard>
            <RepoName>{repo?.full_name}</RepoName>
            <div>{repo?.description}</div>
            <LanguageInfo>
              <LanguageName>
                {getLanguageColor(repo)}
                {repo.language ? repo.language : "none"}
              </LanguageName>
              <div>
                <BsStar style={{ width: "12px", height: "12px" }} />
                {repo.stargazers_count}
              </div>
              <div>
                <PiGitBranchThin style={{ width: "12px", height: "12px" }} />
                {repo.forks_count}
              </div>
            </LanguageInfo>
          </ContainerCard>
        ))}
      </CardWrapper>
      <Footer>
        <Link
          to="/profile"
          style={iconStyles}
          onMouseOver={(e) => {
            e.target.style.color = hoverStyles.color;
          }}
          onMouseOut={(e) => {
            e.target.style.color = iconStyles.color;
          }}
        >
          <BiSolidUser
            style={{ width: "50px", height: "50px", color: "#BDBDBD" }}
          />
        </Link>

        <Link
          to="/"
          style={iconStyles}
          onMouseOver={(e) => {
            e.target.style.color = hoverStyles.color;
          }}
          onMouseOut={(e) => {
            e.target.style.color = iconStyles.color;
          }}
        >
          <RiSearchFill
            style={{ width: "50px", height: "50px", color: "#BDBDBD" }}
          />
        </Link>
        <Link
          to="/favorites"
          style={iconStyles}
          onMouseOver={(e) => {
            e.target.style.color = hoverStyles.color;
          }}
          onMouseOut={(e) => {
            e.target.style.color = iconStyles.color;
          }}
        >
          <AiFillStar
            style={{ width: "50px", height: "50px", color: "#BDBDBD" }}
          />
        </Link>
      </Footer>
    </>
  );
}

export default RepositoriesPage;
