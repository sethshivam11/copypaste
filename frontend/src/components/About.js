export default function About(props) {
  return (
    <div className="container" data-bs-theme={props.mode}>
      <h3 className="my-3 mx-2">About Us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Convert to UPPERCASE
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                The "Convert to Uppercase" function is a powerful feature
                offered by Text Utils, your go-to text utility.
              </strong>
              This function allows you to effortlessly transform text into
              uppercase, giving it a bold and impactful appearance. Whether
              you're working on a document, email, or any other text-based
              content, converting to uppercase can enhance readability and draw
              attention to important information. To use this feature, simply
              paste or type your text into the provided input box, and then
              click the "Convert to Uppercase" button. Within seconds, your text
              will be transformed into uppercase letters, ready to make a
              statement. Whether you're writing a heading, emphasizing a
              message, or just experimenting with text styles, the "Convert to
              Uppercase" function in Text Utils has got you covered. Experience
              the ease and convenience of converting text to uppercase with Text
              Utils. Elevate your text formatting and communication with this
              handy tool that simplifies the process while maintaining the
              professional touch you need.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Convert to lowercase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                The "Convert to Lowercase" function is a versatile tool offered
                by Text Utils, designed to enhance your text manipulation
                experience.
              </strong>
              This function allows you to seamlessly change text to lowercase,
              lending it a refined and understated appearance. Whether you're
              composing an essay, chat message, or any textual content,
              converting to lowercase can provide a clean and consistent look.
              To utilize this feature, effortlessly insert or type your text
              into the designated input area, then activate the "Convert to
              Lowercase" button. In mere moments, your text will be converted to
              lowercase characters, creating a uniform and harmonious flow.
              Whether you're normalizing text or aiming for a more subdued tone,
              the "Convert to Lowercase" function within Text Utils is at your
              service. Embrace the simplicity and effectiveness of converting
              text to lowercase with Text Utils. Elevate your text styling and
              communication with this practical utility that streamlines the
              process while preserving the polished touch you require.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Clear Text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Introducing the "Clear Text" function, an essential tool within
                Text Utils designed to streamline your text editing experience.
              </strong>
              With this feature, achieving a clean slate for your text has never
              been easier. Whether you're dealing with extraneous formatting,
              unwanted characters, or simply seeking a fresh start, the "Clear
              Text" function is at your service. To utilize this feature,
              effortlessly remove any unwanted elements from your text by
              pasting or typing it into the designated input box. Afterward, a
              single click on the "Clear Text" button will swiftly eliminate
              formatting, special characters, and any clutter, leaving you with
              clear and concise content. This function is perfect for preparing
              text for various purposes, from copying and pasting into a new
              document to ensuring that your messages are free from unintended
              distractions. The "Clear Text" function in Text Utils empowers you
              to focus solely on your content, without being weighed down by
              unnecessary elements. Experience the convenience and efficiency of
              the "Clear Text" function with Text Utils. Elevate your text
              editing and formatting tasks with this tool that makes tidying up
              your text a breeze, enabling you to present your ideas with
              clarity and precision.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Copy Text
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                The "Copy Text" function, an integral feature of Text Utils,
                offers you a seamless and efficient way to duplicate text for
                various purposes.
              </strong>
              With just a few clicks, you can easily copy the transformed or
              original text to your clipboard, ready to be pasted wherever you
              need it. Whether you've converted text to uppercase, lowercase, or
              performed any other formatting action using Text Utils, the "Copy
              Text" function enables you to swiftly transfer the results to your
              clipboard. This function is incredibly useful when you're working
              on multiple documents, emails, or platforms, streamlining your
              workflow and saving you valuable time. To utilize the "Copy Text"
              function, simply input your text into the designated area and
              apply any desired formatting using the available tools. Once
              you're satisfied with the result, click the "Copy Text" button.
              The formatted text will be instantly copied to your clipboard,
              ensuring that you can paste it into your chosen destination
              without missing a beat. Elevate your text manipulation experience
              with the Text Utils "Copy Text" function. Enjoy the convenience of
              seamless copying and pasting, making your text-related tasks a
              breeze. Whether it's for professional documents, creative
              projects, or personal communication, Text Utils has you covered
              with this versatile and essential feature.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Remove Extra Spaces
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Introducing the "Remove Extra Spaces" function, an essential
                tool within Text Utils that streamlines your text editing
                experience.
              </strong>
              This function is designed to effortlessly eliminate unnecessary
              spaces, ensuring your text remains clean, polished, and free from
              distracting gaps. Whether you're dealing with copied content,
              pasted text, or even your own writing, the "Remove Extra Spaces"
              function guarantees consistent and well-formatted text. Using this
              feature is a breeze. Just paste or enter your text into the
              designated input box, and with a simple click of the "Remove Extra
              Spaces" button, any excess spaces within the text will be
              intelligently removed. No more manual hunting for redundant
              spaces; this function handles it for you, saving time and ensuring
              your content maintains a professional appearance. Whether you're
              composing an article, creating a presentation, or updating your
              website, the "Remove Extra Spaces" function in Text Utils is your
              solution for achieving clean and polished text. Experience the
              convenience and accuracy of this feature, and elevate your text
              editing tasks with the precision and efficiency you deserve.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
