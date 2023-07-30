export default function PrivacyPolicy() {
  const dateUpdated = new Date("2023-07-30").toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-8 min-w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p>
          Welcome to Key Vault. We are committed to protecting your privacy and
          ensuring the security of any personal information you provide to us.
          This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your data when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          Information We Collect
        </h2>
        <p>
          The only information we collect from you is your preferred theme
          (e.g., dark or light) using a cookie. We do not collect any personally
          identifiable information, and we do not use any tracking mechanisms or
          analytics tools.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          How We Use Your Information
        </h2>
        <p>
          We use the theme preference information stored in the cookie solely
          for the purpose of providing you with your preferred theme when you
          visit our website. We do not share this information with any third
          parties, and we do not use it for any other purposes.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Cookie Policy</h2>
        <p>
          A cookie is a small text file that is stored on your device when you
          visit a website. Key Vault uses cookies only to store your preferred
          theme choice, and these cookies do not contain any personal
          information. You can control and manage cookies through your browser
          settings.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Contact Information</h2>
        <p>
          If you have any questions, concerns, or requests regarding your data
          and this privacy policy, please feel free to contact us:
          <br />
          Email: sean.stocker15@gmail.com
          <br />
          Phone: 07517273075
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          Changes to This Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page, and the date of the last update will be
          modified accordingly.
        </p>
        <p className="mt-6">
          <span className="mr-2">This Privacy Policy was last updated on</span>
          <span className="font-semibold">{dateUpdated}</span>
        </p>
      </div>
    </div>
  );
}
