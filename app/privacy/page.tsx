import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div className="p-4 pt-16 text-white flex flex-col gap-2">
      <h1 className="text-center text-2xl">Privacy Policy</h1>

      <h2 className="text-lg text-bold">1. Introduction</h2>
      <p className="text-sm">
        Offside Music ("We", "us", "our") respects the privacy of our users
        ("you"). This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website
        <Link href="/" className="text-yellow-500 hover:text-yellow-700">
          {process.env.NEXT_PUBLIC_FRONTEND_URL}
        </Link>{" "}
        (the "Website"), use our mobile application (the "App"), and any other
        service provided by us ("Services"). Please read this privacy policy
        carefully. If you do not agree with the terms of this privacy policy,
        please do not access the site or use the Services.
      </p>

      <h2 className="text-lg text-bold">2. Information We Collect</h2>
      <p className="text-sm">
        We may collect information about you in a variety of ways. The
        information we may collect on the Services includes:
        <ul>
          <li>
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, shipping address, email address, and telephone
            number, and demographic information, such as your age, gender,
            hometown, and interests, that you voluntarily give to us when you
            register with the Services or when you choose to participate in
            various activities related to the Services, such as online chat and
            message boards.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the Services, such as your IP
            address, your browser type, your operating system, your access
            times, and the pages you have viewed directly before and after
            accessing the Services.
          </li>
          <li>
            <strong>Financial Data:</strong> Financial information, such as data
            related to your payment method (e.g., valid credit card number, card
            brand, expiration date) that we may collect when you purchase,
            order, return, exchange, or request information about our services
            from the Services.
          </li>
          <li>
            <strong>Data from Contests, Giveaways, and Surveys:</strong>{" "}
            Personal and other information you may provide when entering
            contests or giveaways and/or responding to surveys.
          </li>
        </ul>
      </p>

      <h2 className="text-lg text-bold">3. Use of Your Information</h2>
      <p className="text-sm">
        Having accurate information about you permits us to provide you with a
        smooth, efficient, and customized experience. Specifically, we may use
        information collected about you via the Services to:
        <ul>
          <li>Administer sweepstakes, promotions, and contests.</li>
          <li>Assist law enforcement and respond to subpoena.</li>
          <li>
            Compile anonymous statistical data and analysis for use internally
            or with third parties.
          </li>
          <li>Create and manage your account.</li>
          <li>
            Deliver targeted advertising, coupons, newsletters, and other
            information regarding promotions and the Services to you.
          </li>
          <li>Email you regarding your account or orders.</li>
          <li>Enable user-to-user communications.</li>
          <li>
            Fulfill and manage purchases, orders, payments, and other
            transactions related to the Services.
          </li>
          <li>
            Generate a personal profile about you to make future visits to the
            Services more personalized.
          </li>
          <li>Increase the efficiency and operation of the Services.</li>
          <li>
            Monitor and analyze usage and trends to improve your experience with
            the Services.
          </li>
          <li>Notify you of updates to the Services.</li>
          <li>Offer new products, services, and/or recommendations to you.</li>
          <li>Perform other business activities as needed.</li>
          <li>
            Prevent fraudulent transactions, monitor against theft, and protect
            against criminal activity.
          </li>
          <li>Process payments and refunds.</li>
          <li>
            Request feedback and contact you about your use of the Services.
          </li>
          <li>Resolve disputes and troubleshoot problems.</li>
          <li>Respond to product and customer service requests.</li>
        </ul>
      </p>

      <h2 className="text-lg text-bold">4. Disclosure of Your Information</h2>
      <p className="text-sm">
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
        <ul>
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the
            release of information about you is necessary to respond to legal
            process, to investigate or remedy potential violations of our
            policies, or to protect the rights, property, and safety of others,
            we may share your information as permitted or required by any
            applicable law, rule, or regulation.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third parties that perform services for us or on
            our behalf, including payment processing, data analysis, email
            delivery, hosting services, customer service, and marketing
            assistance.
          </li>
          <li>
            <strong>Marketing Communications:</strong> With your consent, or
            with an opportunity for you to withdraw consent, we may share your
            information with third parties for marketing purposes, as permitted
            by law.
          </li>
          <li>
            <strong>Interactions with Other Users:</strong> If you interact with
            other users of the Services, those users may see your name, profile
            photo, and descriptions of your activity, including sending
            invitations to other users, chatting with other users, liking posts,
            following blogs.
          </li>
          <li>
            <strong>Online Postings:</strong> When you post comments,
            contributions or other content to the Services, your posts may be
            viewed by all users and may be publicly distributed outside the
            Services in perpetuity.
          </li>
        </ul>
      </p>

      <h2 className="text-lg text-bold">5. Security of Your Information</h2>
      <p className="text-sm">
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable, and no method of data transmission can be guaranteed
        against any interception or other type of misuse. Any information
        disclosed online is vulnerable to interception and misuse by
        unauthorized parties. Therefore, we cannot guarantee complete security
        if you provide personal information.
      </p>
    </div>
  );
};

export default PrivacyPage;
