import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import resumeContent from '/src/assets/resume.md?raw'; // Load the raw text of the Markdown file

const Resume = () => {
  return (
    <section className="px-4 py-8">
      <div className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {resumeContent}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default Resume;
