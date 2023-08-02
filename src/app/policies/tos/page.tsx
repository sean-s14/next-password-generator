export default function TermsOfService() {
  const dateUpdated = new Date("2023-07-30").toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 min-w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl xs:text-3xl font-semibold mb-6 text-center">
          Terms of Service
        </h1>
        <p className="mb-4 text-sm xs:text-base">
          Welcome to Key Vault! These terms and conditions outline the rules and
          regulations for the use of our website.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4 text-sm xs:text-base">
          By accessing this website, you accept and agree to be bound by the
          terms and conditions set forth in this agreement.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Use License</h2>
        <p className="mb-4 text-sm xs:text-base">
          Permission is granted to use Key Vault for generating passwords for
          personal, non-commercial use only.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. Disclaimer</h2>
        <p className="mb-4 text-sm xs:text-base">
          The use of Key Vault is at your own risk. We do not guarantee the
          security or effectiveness of the generated passwords.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Theme Preference</h2>
        <p className="mb-4 text-sm xs:text-base">
          Key Vault uses cookies to store your preferred theme choice (e.g.,
          dark or light). By using our website, you agree to the use of cookies
          for this purpose.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Contact Information</h2>
        <p className="mb-4 text-sm xs:text-base">
          If you have any questions or concerns regarding these terms, you can
          contact us at:
          <br />
          Email: sean.stocker15@gmail.com
          <br />
          Phone: 07517273075
        </p>

        <h2 className="text-xl font-semibold mb-2">
          6. Changes to This Agreement
        </h2>
        <p className="mb-4 text-sm xs:text-base">
          We reserve the right to modify these terms of service at any time.
          Your continued use of Key Vault after any changes constitute your
          acceptance of the updated terms.
        </p>
        <p className="mt-6">
          <span className="mr-2">This Privacy Policy was last updated on</span>
          <span className="font-semibold">{dateUpdated}</span>
        </p>
      </div>
    </div>
  );
}
