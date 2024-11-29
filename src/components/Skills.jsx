import React, { useState } from "react";
import "../css/skills.css";
import TitleHead from "../parts/TitleHead";
import {
  admin_suprt,
  creative_serve,
  cus_care,
  lead_nurt,
  markt_n_advert,
} from "../assets/icons";
import { interestForm } from "../constants";

const Skills = () => {
  const [activeBlocks, setActiveBlocks] = useState([]);

  const handleSkillClick = (blockId) => {
    if (activeBlocks.includes(blockId)) {
      setActiveBlocks(activeBlocks.filter((id) => id !== blockId)); // Remove blockId if it's already active
    } else {
      setActiveBlocks([...activeBlocks, blockId]); // Add blockId if it's not active
    }
  };

  return (
    <section className="skills padding_side" id='skills'>
      <div className="skill_container">
        <TitleHead
          header="Virtual Assistant Benefits"
          subheader="Efficiently Handling a Wide Range of Tasks"
          ctaType="Get Free Guide"
          link="#"
        />

        <div className="skillset">
          <AdminBlock
            handleSkillClick={handleSkillClick}
            activeBlocks={activeBlocks}
          />
          <CreativeServeBlock
            handleSkillClick={handleSkillClick}
            activeBlocks={activeBlocks}
          />
          <CustumerCareBlock
            handleSkillClick={handleSkillClick}
            activeBlocks={activeBlocks}
          />
          <LeadNurturingBlock
            handleSkillClick={handleSkillClick}
            activeBlocks={activeBlocks}
          />
          <MrktNAdvertlock
            handleSkillClick={handleSkillClick}
            activeBlocks={activeBlocks}
          />
          <div
            className={`skillblock `}
          >
            <div className="skillhead padding_side">
              <h1>VA Interest Form</h1>
              <a href={interestForm} className="cta poppins-regular">ARE WE THE ONE?</a>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

const AdminBlock = ({ handleSkillClick, activeBlocks }) => {
  return (
    <div
      className={`skillblock admnspt ${
        activeBlocks.includes(1) ? "active" : ""
      }`}
      onClick={() => handleSkillClick(1)}
    >
      <div className="skillhead padding_side">
        <img src={admin_suprt} alt="Administrative Support Icon" />
        <h1>Administrative Support</h1>
      </div>

      <div className="skill_list padding_side">
        <ul>
          <li>
            <b>Calendar Management</b>
          </li>
          <ul>
            <li>Appointment Setting</li>

            <li>Meeting Coordination</li>
            <li>Reminders</li>
          </ul>

          <li>
            <b>Accounting and Finance</b>
          </li>
          <ul>
            <li>Bookkeeping/QuickBooks</li>
            <li>Expense Tracking</li>
            <li>Financial Reporting</li>
            <li>Payroll Processing</li>
            <li>Invoice Management</li>
          </ul>

          <li>
            <b>Travel Arrangements</b>
          </li>
          <li>
            <b>Email Management</b>
          </li>
          <li>
            <b>Data Entry</b>
          </li>
          <li>
            <b>Document Preparation</b>
          </li>
          <li>
            <b>Research</b>
          </li>

          <li>
            <b>Project Management</b>
          </li>
          <ul>
            <li>Task Coordination</li>
            <li>Timeline Management</li>
            <li>Resource Allocation</li>
            <li>Event Planning</li>
            <li>New Product/Service Rollout</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

const CreativeServeBlock = ({ handleSkillClick, activeBlocks }) => {
  return (
    <div
      className={`skillblock creative_serve ${
        activeBlocks.includes(2) ? "active" : ""
      }`}
      onClick={() => handleSkillClick(2)}
    >
      <div className="skillhead padding_side">
        <img src={creative_serve} alt="Creative Services Icon" />
        <h1>Creative Services</h1>
      </div>

      <div className="skill_list padding_side">
        <ul>
          <li>
            <b>Video Editing</b>
          </li>
          <ul>
            <li>Adobe Premiere Pro</li>
            <li>Final Cut Pro</li>
            <li>Motion Graphics</li>
            <li>Animation</li>
          </ul>

          <li>
            <b>Photo Editing</b>
          </li>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>

          <li>
            <b>Graphics Design</b>
          </li>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>

          <li>
            <b>Podcast</b>
          </li>
          <ul>
            <li>Audio Editing</li>
            <li>Sound Mixing</li>
            <li>Script Writing</li>
            <li>Guest Coordination</li>
          </ul>

          <li>
            <b>Course Creation</b>
          </li>
          <li>
            <b>Transcription</b>
          </li>
          <ul>
            <li>Audio Transcription</li>
            <li>Video Transcription</li>
            <li>Time-Coded Transcripts</li>
          </ul>

          <li>
            <b>Web Development</b>
          </li>
          <li>
            <b>Funnel Page(s)</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CustumerCareBlock = ({ handleSkillClick, activeBlocks }) => {
  return (
    <div
      className={`skillblock cus_care ${
        activeBlocks.includes(3) ? "active" : ""
      }`}
      onClick={() => handleSkillClick(3)}
    >
      <div className="skillhead padding_side">
        <img src={cus_care} alt="Administrative Support Icon" />
        <h1>Customer Care</h1>
      </div>

      <div className="skill_list padding_side">
        <ul>
          <li>
            <b>Customer Onboarding</b>
          </li>
          <li>
            <b>Support Ticket Management</b>
          </li>
          <li>
            <b>Technical Troubleshooting</b>
          </li>
          <li>
            <b>Customer Feedback Collection</b>
          </li>
          <li>
            <b>Knowledge Base Management</b>
          </li>

          <li>
            <b>Personal Support</b>
          </li>
          <ul>
            <li>Email Support</li>
            <li>Live Chat Support</li>
            <li>Phone Support</li>
          </ul>

          <li>
            <b>Order Processing</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

const LeadNurturingBlock = ({ handleSkillClick, activeBlocks }) => {
  return (
    <div
      className={`skillblock lead_nurt ${
        activeBlocks.includes(4) ? "active" : ""
      }`}
      onClick={() => handleSkillClick(4)}
    >
      <div className="skillhead padding_side">
        <img src={lead_nurt} alt="Administrative Support Icon" />
        <h1>Lead Nurturing</h1>
      </div>

      <div className="skill_list padding_side">
        <ul>
          <li>
            <b>CRM Management</b>
          </li>
          <li>
            <b>Webinar Management</b>
          </li>
          <li>
            <b>Pre-qualifying Leads</b>
          </li>
          <li>
            <b>Community Management</b>
          </li>
          <li>
            <b>Market Research</b>
          </li>
          <li>
            <b>LinkedIn Messaging</b>
          </li>
          <li>
            <b>Business Cards/Contact Management</b>
          </li>

          <li>
            <b>Personal Touch</b>
          </li>
          <ul>
            <li>Handwritten Notes</li>
            <li>Gifts/Celebration/Holidays</li>
            <li>Phone Support</li>
          </ul>

          <li>
            <b>Email Campaigns</b>
          </li>
          <li>
            <b>Text Campaigns</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MrktNAdvertlock = ({ handleSkillClick, activeBlocks }) => {
  return (
    <div
      className={`skillblock markt_n_advert ${
        activeBlocks.includes(5) ? "active" : ""
      }`}
      onClick={() => handleSkillClick(5)}
    >
      <div className="skillhead padding_side">
        <img src={markt_n_advert} alt="Administrative Support Icon" />
        <h1>Marketing & Advertising</h1>
      </div>

      <div className="skill_list padding_side">
        <ul>
          <li>
            <b>Social Media Management</b>
          </li>
          <ul>
            <li>Content Creation</li>
            <li>Scheduling Posts</li>
            <li>Community Management</li>
            <li>Analytics and Reporting</li>
          </ul>

          <li>
            <b>Ads/Pay-Per-Click (PPC) </b>
          </li>
          <li>
            <b>Email Marketing</b>
          </li>

          <li>
            <b>Content Marketing</b>
          </li>
          <ul>
            <li>Blog Writing</li>
            <li>SEO Writing</li>
            <li>Copywriting</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
