import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.jpg";
import dex from "../../Assets/Projects/dex.jpg";
import nodebook from "../../Assets/Projects/nodebook.png";
import p2p from "../../Assets/Projects/p2p.jpg";
import page from "../../Assets/Projects/page.PNG";
import bitsOfCode from "../../Assets/Projects/blog.png";
import leaf from "../../Assets/Projects/leaf.png";
import crowdfunding from "../../Assets/Projects/crowdfunding.jpg";
import simulator from "../../Assets/Projects/simulator.jpg";
import nft from "../../Assets/Projects/nft.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on to solve a real life problem.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={page}
              isBlog={false}
              title="Wallet Integration"
              description="Krypt is a decentralized application that allows it's users to integrate their metamask crypto wallets to the front-end website. This platform allows users to transact anonymously and displays a list of recent transactions from the linked metamask account. Stack: Solidity, Reactjs, Hardhat, Goerli Testnet, ERC20"
              ghLink="https://github.com/alfredrodriguez98/Krypt-Wallet-Integration"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodebook}
              isBlog={false}
              title="Nodebook DApp"
              description="Nodebook DApp is a decentralized chatting application across multiple nodes added into the friend-list by the user. This platform allows users to interact anonymously with sudo nikenames and displays a list of friend lists linked to the user account. Stack: Solidity, Reactjs, Hardhat, Goerli Testnet, ERC20"
              ghLink="https://github.com/alfredrodriguez98/nodebook_dapp"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simulator}
              isBlog={false}
              title="Blockchain Simulator"
              description="Simulated the complete working of a blockchain network right from the Genesis block, block mining, blockchain creation, nonce, mining rate, difficulty adjustment, broadcasting data among nodes, syncing all nodes can be visualized completely in the backend environment on terminal. A user can also add blocks by embedded own data using Postman client as well. Stack: JavaScript, Node.js, Postman, Express.js, Redis server
"
              ghLink="https://github.com/alfredrodriguez98/Blockchain-Simulation"
              demoLink="https://www.postman.com/downloads/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2p}
              isBlog={false}
              title="P2P Lending Decentralized App"
              description="P2P Lending is a decentralized application that allows it's users to lend and borrow funds across peers. This platform allows user to deposit/withdraw collateral staked within the platform. The user can request for a loan for 80% of the collateral value deposited within the platform. Stack: Solidity, Goerli Testnet, Hardhat, ERC20"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dex}
              isBlog={false}
              title="DEX"
              description="Decentralized Crypto currency exchange intends to swap two different crypto currencies at the best market price with minimum slippage as possible. Stack: Solidity, Goerli Testnet, Hardhat, ERC20"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdfunding}
              isBlog={false}
              title="Crowdfunding DApp"
              description="It allows the contract owner to request funds for a certain purpose and return to the participants post completion/launch of services. Stack: Solidity, ERC20, Ropsten Testnet, Ganache, Hardhat"
              ghLink="https://github.com/alfredrodriguez98/DApp-Crowdfunding"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Lottery DApp"
              description="A fully transparent, decentralized lottery application providing fair chance of winning the lottery by selecting a truly random number using keccak256 secure hash algorithm. Stack: Solidity, ERC20, DeFi, Ropsten Testnet, Ganache, Hardhat"
              ghLink="https://github.com/alfredrodriguez98/Dapp-Lottery"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="MyNFT- DApp:"
              description="Created my own unique NFT using Alchemy and stored files using IPFS. Stack: Solidity, ERC721, DeFi, web3.js, GoerliTestnet, Hardhat, IPFS"
              ghLink="https://github.com/alfredrodriguez98/MyNFT"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Student Database Management-DApp"
              description="It allows the contract owner to add and modify data of student records. The students can only view the data updated by the contract owner. Stack: Solidity, Remix, ERC20, Kovan Testnet"
              ghLink="https://github.com/alfredrodriguez98/Dapp-Student-Management-System"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Saviour - Android Geofencing Application"
              description="Saviour is an android based geofencing prototype application designed keeping fishermen in mind. It prevents them from entering restricted International Maritime Borders, thereby avoiding geo-political issues. The project was build using Android Studio IDE, Java, Firebase Integration and few Google APIs."
              ghLink="https://github.com/alfredrodriguez98/Saviour_Android_Geofencing_App"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
