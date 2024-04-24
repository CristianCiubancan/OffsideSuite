import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="p-4 pt-16 text-white flex flex-col gap-2">
      <h1 className="text-center text-2xl">Terms of Service</h1>

      <h2 className="text-lg text-bold">1. Introduction</h2>

      <p className="text-sm">
        Welcome to Offside Music ("We", "our", "us")! These Terms of Use
        ("Terms") govern your use of our website located at{" "}
        <Link href="/" className="text-yellow-500 hover:text-yellow-700">
          {process.env.NEXT_PUBLIC_FRONTEND_URL}
        </Link>{" "}
        ("Website"), use our mobile application (the "App"), and any related
        services provided by us (collectively, "Services"). By accessing or
        using our Services, you agree to be bound by these Terms. If you do not
        agree to these Terms, do not use our Services.
      </p>

      <h2 className="text-lg text-bold">2. Privacy Policy</h2>

      <p className="text-sm">
        Our Privacy Policy, which describes how we collect, use, and share your
        personal information, is available at{" "}
        <Link href="/privacy" className="text-yellow-500 hover:text-yellow-700">
          {process.env.NEXT_PUBLIC_FRONTEND_URL}/privacy
        </Link>
        . By using our Services, you agree to the terms of our Privacy Policy.
      </p>

      <h2 className="text-lg text-bold">3. Your Account</h2>

      <p className="text-sm">
        When you create an account with us, you must provide us with accurate
        and complete information. You are responsible for maintaining the
        confidentiality of your account and password, including but not limited
        to the restriction of access to your computer and/or account. You agree
        to accept responsibility for any and all activities or actions that
        occur under your account and/or password.
      </p>

      <h2 className="text-lg text-bold">4. Prohibited Activities</h2>

      <p className="text-sm">
        You agree not to engage in the following prohibited activities: (i)
        copying, distributing, or disclosing any part of the Services in any
        medium, including without limitation by any automated or non-automated
        "scraping"; (ii) using any automated system, including without
        limitation "robots," "spiders," "offline readers," etc., to access the
        Services; (iii) transmitting spam, chain letters, or other unsolicited
        email; (iv) attempting to interfere with, compromise the system
        integrity or security, or decipher any transmissions to or from the
        servers running the Services; (v) taking any action that imposes, or may
        impose at our sole discretion an unreasonable or disproportionately
        large load on our infrastructure; (vi) uploading invalid data, viruses,
        worms, or other software agents through the Services; (vii) collecting
        or harvesting any personally identifiable information, including account
        names, from the Services; (viii) using the Services for any commercial
        solicitation purposes; (ix) impersonating another person or otherwise
        misrepresenting your affiliation with a person or entity, conducting
        fraud, hiding or attempting to hide your identity; (x) interfering with
        the proper working of the Services; (xi) accessing any content on the
        Services through any technology or means other than those provided or
        authorized by the Services; (xii) bypassing the measures we may use to
        prevent or restrict access to the Services, including without limitation
        features that prevent or restrict use or copying of any content or
        enforce limitations on use of the Services or the content therein.
      </p>

      <h2 className="text-lg text-bold">5. Changes to the Terms</h2>

      <p className="text-sm">
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. If a revision is material, we will provide at least
        30 days' notice prior to any new terms taking effect. What constitutes a
        material change will be determined at our sole discretion.
      </p>

      <h2 className="text-lg text-bold">6. Contact Us</h2>

      <p className="text-sm">
        If you have any questions about these Terms, please contact us by using
        the contact form located on our homepage.
      </p>
    </div>
  );
};

export default TermsPage;
