import { Icon } from "@iconify/react";

export default function ContactComponent() {
  return (
    <div className="contact-div page-div" id="contact">
      <h1>Contact</h1>
      <div className="contact-anchor-container">
        <div>
          <a href="https://github.com/AshleyWrightA">
            Github
            <Icon icon="ion:logo-github" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ashleywrighta/">
            Linked
            <Icon icon="ion:logo-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
