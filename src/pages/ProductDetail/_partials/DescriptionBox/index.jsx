import React from "react";
import styles from "./index.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const renderStars = (rating, color) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={`full-${index}`} color={color} />
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} color={color} />
        ))}
    </>
  );
};

const DescriptionBox = ({ product }) => {
  const starColor = "#808080";
  const [activeState, setActiveState] = useState(1);

  const activeTab = (index) => {
    setActiveState(index);
  };

  const features = product?.features || [];
  const reviewDetail = product?.reviewDetail || [];

  return (
    <div id={styles.descriptionBox}>
      <div className={styles.descriptionNavigator}>
        <div
          className={
            activeState === 1
              ? `${styles.descriptionNavBox} ${styles.activeTabs}`
              : styles.descriptionNavBox
          }
          onClick={() => activeTab(1)}
        >
          <HiOutlineDotsHorizontal />
          <p>Details</p>
        </div>
        <div
          className={
            activeState === 2
              ? `${styles.descriptionNavBox} ${styles.activeTabs}`
              : styles.descriptionNavBox
          }
          onClick={() => activeTab(2)}
        >
          <CiStar />
          <p>Reviews</p>
        </div>
      </div>

      <div
        className={
          activeState === 1
            ? `${styles.descriptionFeatures} ${styles.activeContent}`
            : styles.descriptionFeatures
        }
      >
        <h5>Detail</h5>
        <div className={styles.descriptionFeaturesWrapper}>
          <div className={styles.descriptionBoxDescription}>
            {product?.description || "No description available."}
          </div>
          {features.length > 0 && (
            <div className={styles.descriptionBoxFeatures}>
              {features.map((feature, index) => (
                <p key={index} className={styles.featuresBox}>
                  {feature}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className={
          activeState === 2
            ? `${styles.reviewsContent} ${styles.activeContent}`
            : styles.reviewsContent
        }
      >
        <h5>Reviews</h5>
        <div className={styles.reviewDetailWrapper}>
          {product?.review?.review1 || product?.review?.review2 ? (
            <>
              <div className={styles.reviewScores}>
                <h2 className={styles.review1}>
                  {product?.review?.review1 || "N/A"}
                </h2>
                <p className={styles.review2}>
                  - {product?.review?.review2 || "N/A"}
                </p>
              </div>
              <Link to="">
                <div className={styles.reviewCta}>Write a review</div>
              </Link>
              <div className={styles.reviewSort}>
                <p>
                  SORT BY{" "}
                  <span>
                    <IoIosArrowDown />
                  </span>
                </p>
              </div>
              {Array.isArray(reviewDetail) && reviewDetail.length > 0 ? (
                reviewDetail.map((detail, index) => (
                  <div className={styles.reviewDetailsContainer} key={index}>
                    <div className={styles.reviewDetails}>
                      <div className={styles.shortname}>
                        <p className={styles.reviewerShortname}>
                          {detail.shortName}
                        </p>
                      </div>
                      <div className={styles.reviewerDetail}>
                        <p className={styles.reviewerName}>
                          {detail.reviewerName}
                        </p>
                        <p className={styles.reviewTime}>{detail.time}</p>
                        <p className={styles.reviewText}>{detail.reviewText}</p>
                      </div>
                    </div>
                    <div className="reviewer-ratings">
                      {renderStars(parseFloat(detail.rating), starColor)}
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-reviews">No detailed reviews available.</p>
              )}
            </>
          ) : (
            <p className="no-reviews">Not yet rated.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
