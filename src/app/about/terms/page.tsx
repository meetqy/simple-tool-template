export default function Page() {
  return (
    <article className="prose prose-lg mx-auto">
      <h1>Simple Tool Template</h1>
      <p>
        A single-function tool website template. Focus on building your core
        tool while leveraging a ready-made structure with internationalization
        (i18n) and SEO optimization. Ideal for quickly deploying small, focused
        utilities.
      </p>

      <h2>✨ Features</h2>
      <ul>
        <li>
          <strong>🌍 Internationalization (i18n) Support:</strong> Built-in
          support for multiple languages using <code>next-intl</code>.
        </li>
        <li>
          <strong>📱 Responsive Design:</strong> Works seamlessly on all
          devices.
        </li>
        <li>
          <strong>🎨 Beautiful UI with NextUI:</strong> Modern and visually
          appealing user interface using the NextUI component library.
        </li>
        <li>
          <strong>🚀 Fast and SEO-Friendly with Next.js:</strong> Leverages the
          performance and SEO benefits of the Next.js framework.
        </li>
        <li>
          <strong>💻 Easy Development Workflow:</strong> Streamlined development
          experience for rapid iteration.
        </li>
        <li>
          <strong>🔍 SEO Optimized with Multi-Language Support:</strong>{" "}
          Optimized for search engines with support for meta descriptions and
          content in multiple languages. Easily translate your tool description
          for broader reach.
        </li>
      </ul>

      <h2>🛠️ Tech Stack</h2>
      <ul>
        <li>
          <a href="https://nextjs.org/">Next.js</a>: React framework for
          production, providing server-side rendering, static site generation,
          and routing.
        </li>
        <li>
          <a href="https://next-intl-docs.vercel.app/">next-intl</a>: The
          internationalization (i18n) library used to manage translations and
          locale routing.
        </li>
        <li>
          <a href="https://nextui.org/">NextUI</a>: A React UI library that
          offers pre-built, stylish components based on Tailwind CSS.
        </li>
        <li>
          <a href="https://tailwindcss.com/">Tailwind CSS</a>: A utility-first
          CSS framework for rapidly styling the application.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally">
            VSCode i18n Ally
          </a>
          : A VSCode extension for efficient one-click translation of{" "}
          <code>i18n.json</code> files.
        </li>
      </ul>

      <h2>🚀 Quick Start</h2>

      <h3>
        <strong>Clone the repository:</strong>
      </h3>
      <pre>
        <code>
          git clone https://github.com/meetqy/simple-tool-template.git
        </code>
      </pre>

      <h3>
        <strong>Install dependencies:</strong>
      </h3>
      <pre>
        <code>pnpm install</code>
      </pre>

      <h3>
        <strong>Copy environment variables:</strong>
      </h3>
      <pre>
        <code>cp .env.example .env</code>
      </pre>

      <h3>
        <strong>Run the development server:</strong>
      </h3>
      <pre>
        <code>pnpm dev</code>
      </pre>

      <h2>📖 How to Use</h2>
      <ol>
        <li>
          <strong>Implement Your Tool:</strong> Add the core functionality of
          your tool within the <code>src</code> directory.
        </li>
        <li>
          <strong>Translate Content:</strong> Update translations for various
          languages in the <code>messages</code> directory. Use VSCode i18n Ally
          for efficient translation.
        </li>
        <li>
          <strong>Optimize for SEO:</strong> Modify SEO-related content (meta
          descriptions, titles) for each language to improve search engine
          rankings.
        </li>
        <li>
          <strong>Customize the UI:</strong> Use NextUI components to customize
          the look and feel of your website.
        </li>
        <li>
          <strong>Deploy Your Site:</strong> Deploy your application to a
          hosting provider like Vercel, Netlify, or AWS.
        </li>
      </ol>

      <h2>📝 i18n Setup</h2>
      <ol>
        <li>
          <strong>Add New Languages:</strong> Create new language files within
          the <code>messages</code> directory. Follow the existing file
          structure.
        </li>
        <li>
          <strong>Use VSCode i18n Ally:</strong> Install and configure the
          VSCode i18n Ally extension for quick and easy translations directly
          within your IDE.
        </li>
        <li>
          <strong>Update Language Switcher:</strong> Modify the language
          switcher in the navigation to include the newly added languages.
        </li>
      </ol>

      <h2>📄 License</h2>
      <p>
        <a href="LICENSE">MIT License</a>
      </p>

      <h2>🤝 Contributing</h2>
      <ol>
        <li>Fork the repository</li>
        <li>
          Create your feature branch (
          <code>git checkout -b feature/your-feature</code>)
        </li>
        <li>
          Commit your changes (<code>git commit -m 'Add some feature'</code>)
        </li>
        <li>
          Push to the branch (<code>git push origin feature/your-feature</code>)
        </li>
        <li>Create a new Pull Request</li>
      </ol>
    </article>
  );
}
