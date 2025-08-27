const Support = () => {
  return (
    <div className="mt-32 mb-12">
      {/* Header Section */}
      <div className="bg-blue-600 pt-16 pb-10">
        <h1 className="font-bold lg:mx-36 text-center text-white text-3xl">
          Support
        </h1>
        <p className="my-6 text-white lg:mx-56 text-center">
          Find answers to frequently asked questions about our medical kits and
          services. If you need further assistance, feel free to contact our
          support team.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-9/12 mx-auto space-y-4 my-10">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What types of medical kits do you sell?
          </div>
          <div className="collapse-content">
            <p>
              We offer first aid kits for home, office, travel, and emergency
              situations. Kits include bandages, antiseptics, gloves, scissors,
              masks, and more essential items.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Do your kits come with a warranty?
          </div>
          <div className="collapse-content">
            <p>
              Yes, our medical kits are guaranteed to contain all items listed.
              If any item is missing or damaged on arrival, contact our support
              team for replacement.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Can I customize a medical kit?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! We offer customizable kits to fit your specific needs.
              Contact us with the items you want, and we’ll prepare a tailored
              kit.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            How long does delivery take?
          </div>
          <div className="collapse-content">
            <p>
              Standard delivery takes 3-5 business days within Bangladesh.
              Expedited delivery options are also available during checkout.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Currently, we ship within Bangladesh only. For bulk or
              international orders, please contact our support team for
              assistance.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            How can I contact support?
          </div>
          <div className="collapse-content">
            <p>
              You can reach our support team via phone at{" "}
              <strong>01834254409 </strong>
              or by email through our contact page. We are happy to help with
              any inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
