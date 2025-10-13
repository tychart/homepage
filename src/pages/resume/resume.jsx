import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import resumeContent from '/src/assets/resume.md?raw'; // Load the raw text of the Markdown file

const resumeContentAlt = `# Hi, *Pluto*
### This is a test!
* How can I use this format
1. To help me organize my resume?

`

export function Resume(props) {

  return (
    <section className='flex py-16'>
    {/* <section className="px-4 py-8"> */}
      <div className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
      {/* <div> */}
        <Markdown remarkPlugins={[remarkGfm]}>
        {resumeContent}
        {/* {resumeContentAlt} */}
        </Markdown>
      </div>
    </section>
  );
}

export default Resume;