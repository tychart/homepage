import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import resumeContent from "/src/assets/resume.md?raw"; // Load the raw text of the Markdown file
import rehypeRaw from "rehype-raw";

const resumeContentAlt = `# Hi, *Pluto*
### This is a test!
* How can I use this format
1. To help me organize my resume?

`;

export function Resume() {
  return (
    <section className="flex py-16">
      <div className="prose prose-neutral dark:prose-invert mx-auto mt-10 max-w-3xl">
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {resumeContent}
          {/* {resumeContentAlt} */}
        </Markdown>
      </div>
    </section>
  );
}

export default Resume;
