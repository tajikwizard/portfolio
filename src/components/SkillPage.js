import React from "react";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-left">
        <div className="skill-header">
          <span>ski</span>lls
        </div>
        <p>
          It is possible to fly without motors, but not without knowledge and
          skill.
        </p>
      </div>
      <div className="skill-right">
        <div id="myCanvasContainer">
          <canvas width="600" height="600" id="myCanvas"></canvas>
        </div>
        <div id="tags">
          <ul className="flex border rounded-md flex-wrap gap-3 p-2">
            <li className="p-2 border rounded-md">
              <a className="text-yellow-300" href="/skills">
                javascript
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-blue-600" href="/skills">
                react
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-orange-500" href="/skills">
                html
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-blue-600" href="/skills">
                css
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-blue-500" href="/skills">
                redux
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-gray-500" href="/skills">
                github
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-blue-400" href="/skills">
                vs code
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-red-500" href="/skills">
                react-routing
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-yellow-500" href="/skills">
                es6+
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-blue-500" href="/skills">
                TailwindCss
              </a>
            </li>
            <li className="p-2 border rounded-md">
              <a className="text-white" href="/skills">
                Bootstrap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
