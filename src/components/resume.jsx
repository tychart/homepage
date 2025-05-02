import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const Resume = () => (
  <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
    <h1>My Resume</h1>
    <MarkdownRenderer filePath="/public/resume.md" />
  </div>
);




// const Resume = () => (
//   <section className="py-20 bg-white" id="resume">
//     <div className="max-w-6xl mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
//       <div className="bg-gray-50 p-8 rounded-xl">
//         <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
//         {/* Add your work experience here */}
//         <h3 className="text-2xl font-semibold mb-4 mt-8">Education</h3>
//         {/* Add your education details here */}
//       </div>
//       <div className="text-center mt-8">
//         <a 
//           href="/path-to-your-resume.pdf" 
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Download Full Resume
//         </a>
//       </div>
//     </div>
//   </section>
// );

export default Resume;
