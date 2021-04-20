import React, { Component } from "react";

const coursePrerequisites = [
  [
    {
      corequisites: [],
      corequisitesExpanded: [],
      credits: "3",
      description: "",
      number: "480",
      prerequisites: ["FIN 303", "FIN 307", "FIN 345"],
      prerequisitesExpanded: [
        {
          corequisites: [],
          corequisitesExpanded: [],
          credits: "3",
          description: "",
          number: "307",
          prerequisites: ["FIN 301"],
          prerequisitesExpanded: [
            {
              corequisites: [],
              corequisitesExpanded: [],
              credits: "3",
              description: "",
              number: "301",
              prerequisites: ["ACC 201", "ACC 202", "HON 125"],
              prerequisitesExpanded: [
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "201",
                  prerequisites: [],
                  prerequisitesExpanded: [],
                  subject: "ACC",
                  title: "Financial Accounting",
                },
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "202",
                  prerequisites: ["ACC 201"],
                  prerequisitesExpanded: [
                    {
                      corequisites: [],
                      corequisitesExpanded: [],
                      credits: "3",
                      description: "",
                      number: "201",
                      prerequisites: [],
                      prerequisitesExpanded: [],
                      subject: "ACC",
                      title: "Financial Accounting",
                    },
                  ],
                  subject: "ACC",
                  title: "Managerial Accounting",
                },
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "125",
                  prerequisites: ["HON 124"],
                  prerequisitesExpanded: [
                    {
                      corequisites: [],
                      corequisitesExpanded: [],
                      credits: "3",
                      description: "",
                      number: "124",
                      prerequisites: [],
                      prerequisitesExpanded: [],
                      subject: "HON",
                      title: "Honors College Algebra",
                    },
                  ],
                  subject: "HON",
                  title: "Adventures in Data Analysis",
                },
              ],
              subject: "FIN",
              title: "Principles of Managerial Finance",
            },
          ],
          subject: "FIN",
          title: "Investments",
        },
        {
          corequisites: [],
          corequisitesExpanded: [],
          credits: "3",
          description: "",
          number: "303",
          prerequisites: ["FIN 301"],
          prerequisitesExpanded: [
            {
              corequisites: [],
              corequisitesExpanded: [],
              credits: "3",
              description: "",
              number: "301",
              prerequisites: ["ACC 201", "ACC 202", "HON 125"],
              prerequisitesExpanded: [
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "201",
                  prerequisites: [],
                  prerequisitesExpanded: [],
                  subject: "ACC",
                  title: "Financial Accounting",
                },
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "202",
                  prerequisites: ["ACC 201"],
                  prerequisitesExpanded: [
                    {
                      corequisites: [],
                      corequisitesExpanded: [],
                      credits: "3",
                      description: "",
                      number: "201",
                      prerequisites: [],
                      prerequisitesExpanded: [],
                      subject: "ACC",
                      title: "Financial Accounting",
                    },
                  ],
                  subject: "ACC",
                  title: "Managerial Accounting",
                },
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "125",
                  prerequisites: ["HON 124"],
                  prerequisitesExpanded: [
                    {
                      corequisites: [],
                      corequisitesExpanded: [],
                      credits: "3",
                      description: "",
                      number: "124",
                      prerequisites: [],
                      prerequisitesExpanded: [],
                      subject: "HON",
                      title: "Honors College Algebra",
                    },
                  ],
                  subject: "HON",
                  title: "Adventures in Data Analysis",
                },
              ],
              subject: "FIN",
              title: "Principles of Managerial Finance",
            },
          ],
          subject: "FIN",
          title: "Intermediate Managerial Finance",
        },
        {
          corequisites: [],
          corequisitesExpanded: [],
          credits: "3",
          description: "",
          number: "345",
          prerequisites: ["FIN 301"],
          prerequisitesExpanded: [
            {
              corequisites: [],
              corequisitesExpanded: [],
              credits: "3",
              description: "",
              number: "301",
              prerequisites: ["ACC 201", "ACC 202", "HON 125"],
              prerequisitesExpanded: [
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "201",
                  prerequisites: [],
                  prerequisitesExpanded: [],
                  subject: "ACC",
                  title: "Financial Accounting",
                },
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "202",
                  prerequisites: ["ACC 201"],
                  prerequisitesExpanded: [
                    {
                      corequisites: [],
                      corequisitesExpanded: [],
                      credits: "3",
                      description: "",
                      number: "201",
                      prerequisites: [],
                      prerequisitesExpanded: [],
                      subject: "ACC",
                      title: "Financial Accounting",
                    },
                  ],
                  subject: "ACC",
                  title: "Managerial Accounting",
                },
                {
                  corequisites: [],
                  corequisitesExpanded: [],
                  credits: "3",
                  description: "",
                  number: "125",
                  prerequisites: ["HON 124"],
                  prerequisitesExpanded: [
                    {
                      corequisites: [],
                      corequisitesExpanded: [],
                      credits: "3",
                      description: "",
                      number: "124",
                      prerequisites: [],
                      prerequisitesExpanded: [],
                      subject: "HON",
                      title: "Honors College Algebra",
                    },
                  ],
                  subject: "HON",
                  title: "Adventures in Data Analysis",
                },
              ],
              subject: "FIN",
              title: "Principles of Managerial Finance",
            },
          ],
          subject: "FIN",
          title: "Managing New Venture Funding",
        },
      ],
      subject: "FIN",
      title: "Entrepreneurial Finance",
    },
  ],
];

const convertPrerequisiteTreeTorows = (courses) => {
  const row1 = courses[0];
  
  console.log("convertPrerequisiteTreeTorows");
  console.log("row1" + row1);
  return [row1];
  // return [
  //     ["FIN 408"],
  //     ["FIN 307","FIN 303","FIN 305"],
  //     ["FIN 201","FIN 202"]
  // ]
};
const OrgChartNode = ({ course }) => {
  return (
    <div class="node">
      {/* console.log(course)
        {'asad'} */}
      {course.subject + " " + course.number + " " + course.title}
      {/* {course.subject} */}
    </div>
  );
};
const OrgChart = ({ rows }) => {
  const rowNodes = rows.map((row) =>
    // console.log(rows)

    row.map((course) => (
      <OrgChartNode course={course} />
      //console.log(course)
    ))
  );

  return (
    <div>
      <h1>Responsive Organization chart</h1>
      {rowNodes}
    </div>
  );
};

class CourseController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const rows = convertPrerequisiteTreeTorows(coursePrerequisites);
    console.log(rows);
    return (
      <div>
        {/* {'asad'} */}
        <OrgChart rows={rows} />
        {console.log("OrgChart" + rows)}
        {console.log(rows)}
      </div>
    );
  }
}

export default CourseController;
