import { useEffect } from "react";

const GoogleReviewsWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight-app-lazy", "");

    document.body.appendChild(script);

    // Cleanup (optional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-9f416ca7-8b66-4ff7-88cc-4f54c04e53db"></div>
  );
};

export default GoogleReviewsWidget;
