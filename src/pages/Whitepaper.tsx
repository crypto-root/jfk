import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Whitepaper() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          KENNEDY Coin Whitepaper
        </h1>

        <div className="prose prose-invert prose-yellow max-w-none">
          <h2>1. Introduction</h2>
          <p>
            KENNEDY Coin represents a groundbreaking intersection of blockchain
            technology and historical truth-seeking. Our mission is to
            facilitate the transparent release of previously classified
            information regarding the assassination of President John F. Kennedy
            through a decentralized platform.
          </p>

          <h2>2. Vision</h2>
          <p>
            We believe that blockchain technology can revolutionize how
            historical documents are preserved, authenticated, and distributed.
            KENNEDY Coin aims to create an immutable record of historical
            documents while ensuring their authenticity and accessibility.
          </p>

          <h2>3. Technology</h2>
          <h3>3.1 Blockchain Infrastructure</h3>
          <p>
            Built on the Ethereum blockchain, KENNEDY Coin utilizes smart
            contracts to ensure transparent and verifiable release of historical
            documents. Each document release is recorded on the blockchain,
            creating an immutable timestamp and verification system.
          </p>

          <h3>3.2 Document Authentication</h3>
          <p>
            Our proprietary authentication system uses advanced cryptographic
            techniques to verify the authenticity of each document. This
            includes:
          </p>
          <ul>
            <li>Digital fingerprinting of original documents</li>
            <li>Blockchain-based timestamp verification</li>
            <li>Multi-signature authentication protocol</li>
          </ul>

          <h2>4. Token Economics</h2>
          <h3>4.1 Token Distribution</h3>
          <p>Total Supply: 1,000,000,000 KENNEDY</p>
          <ul>
            <li>45% - Public Sale</li>
            <li>25% - Document Acquisition and Verification</li>
            <li>20% - Development and Operations</li>
            <li>5% - Team and Advisors</li>
            <li>5% - Community Rewards</li>
          </ul>

          <h3>4.2 Token Utility</h3>
          <p>KENNEDY tokens serve multiple purposes within our ecosystem:</p>
          <ul>
            <li>Access to classified document releases</li>
            <li>Voting rights on document release schedule</li>
            <li>Participation in authentication process</li>
            <li>Community governance</li>
          </ul>

          <h2>5. Roadmap</h2>
          <h3>Phase 1: Foundation (Q1 2025)</h3>
          <ul>
            <li>Initial token launch</li>
            <li>Platform development</li>
            <li>First document acquisition</li>
          </ul>

          <h3>Phase 2: Implementation (Q2 2025)</h3>
          <ul>
            <li>Document verification system launch</li>
            <li>First major document release</li>
            <li>Community governance implementation</li>
          </ul>

          <h3>Phase 3: Expansion (Q3 2025)</h3>
          <ul>
            <li>Enhanced platform features</li>
            <li>Additional document acquisitions</li>
            <li>Partnership development</li>
          </ul>

          <h2>6. Conclusion</h2>
          <p>
            KENNEDY Coin represents more than just a cryptocurrency – it's a
            movement towards historical transparency and truth. By leveraging
            blockchain technology, we aim to create an unprecedented level of
            access to important historical documents while ensuring their
            authenticity and preservation for future generations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;
