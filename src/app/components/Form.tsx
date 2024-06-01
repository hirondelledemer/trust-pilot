'use client'; // todo: do not use client

export default function Form() {
  return (
    <div className="formContainer">
      <div className="formRow">
        <label className="formTitle">Rate your recent experience</label>
        <div>
          <div className="starSelectorContainer">
            {/* todo: redo star selector */}
            <input
              type="radio"
              name="star-selector"
              className="starSelector"
              aria-label="1 star: Bad"
              value="1"
            />
            <input
              type="radio"
              className="starSelector"
              aria-label="5 stars: Excellent"
              value="5"
            />
          </div>
          <div className="starRating">
            <img
              alt=""
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-0.svg"
            />
          </div>
        </div>
      </div>
      <div className="formRow">
        <label className="formTitle">Tell us more about your experience</label>
        <a
          href="https://legal.trustpilot.com/for-reviewers/guidelines-for-reviewers"
          target="_blank"
          className="formLink"
        >
          Read our Guidelines for Reviewers
        </a>
        <div>
          <textarea
            placeholder="What went wrong this time? How can this company improve? Remember to be honest, helpful, and constructive!"
            rows={7}
            aria-invalid="false"
            aria-describedby="review-text-helper-text"
            data-review-text-input="true"
            className="textarea"
          />
        </div>
        <a
          href="https://support.trustpilot.com/hc/articles/223402108"
          target="_blank"
          className="formLink"
        >
          How to write a useful review
        </a>
      </div>
    </div>
  );
}
