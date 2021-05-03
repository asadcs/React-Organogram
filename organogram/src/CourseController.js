import React, { Component } from "react";
import { CreateAPIEndPoint, END_POINTS } from "./api";
import "./OrgChart.css";

function log(Component, variable, variablename) {
  console.log("\n");
  console.log("\n");
  console.log(
    "%c ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    "color: brown; font-weight: bold; font-size:15px"
  );
  console.log(
    "%c Componenet : " + Component,
    "color: green; font-weight: bold; font-size:15px;background-color:yellow;"
  );

  console.log(
    "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
  );
  console.log(
    "%c variable   : " + variablename,
    "color: blue; font-weight: bold; font-size:15px"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
  );
  console.log(
    "%c type       : " + typeof variable,
    "color: red; font-weight: bold; font-size:15px"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
  );
  console.log("\n");
  console.log("\n");
  console.log(variable);
  console.log("\n");
  console.table(variable);
  console.log("\n");
  console.log(
    "%c ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    "color: brown; font-weight: bold; font-size:15px"
  );
  console.log("\n");
  console.log("\n");
}

const CoursePrerequisites = [
  {
    number: "480",
    prerequisites: ["FIN 303", "FIN 307", "FIN 345"],
    prerequisitesExpanded: [
      {
        number: "307",
        prerequisites: ["FIN 301"],
        prerequisitesExpanded: [
          {
            number: "301",
            prerequisites: ["ACC 201", "ACC 202", "HON 125"],
            prerequisitesExpanded: [
              {
                number: "201",
                prerequisites: [],
                prerequisitesExpanded: [],
                subject: "ACC",
                title: "Financial Accounting",
              },
              {
                number: "202",
                prerequisites: ["ACC 201"],
                prerequisitesExpanded: [
                  {
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
                number: "125",
                prerequisites: ["HON 124"],
                prerequisitesExpanded: [
                  {
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
        number: "303",
        prerequisites: ["FIN 301"],
        prerequisitesExpanded: [
          {
            number: "301",
            prerequisites: ["ACC 201", "ACC 202", "HON 125"],
            prerequisitesExpanded: [
              {
                number: "201",
                prerequisites: [],
                prerequisitesExpanded: [],
                subject: "ACC",
                title: "Financial Accounting",
              },
              {
                number: "202",
                prerequisites: ["ACC 201"],
                prerequisitesExpanded: [
                  {
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
                number: "125",
                prerequisites: ["HON 124"],
                prerequisitesExpanded: [
                  {
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
        number: "345",
        prerequisites: ["FIN 301"],
        prerequisitesExpanded: [
          {
            number: "301",
            prerequisites: ["ACC 201", "ACC 202", "HON 125"],
            prerequisitesExpanded: [
              {
                number: "201",
                prerequisites: [],
                prerequisitesExpanded: [],
                subject: "ACC",
                title: "Financial Accounting",
              },
              {
                number: "202",
                prerequisites: ["ACC 201"],
                prerequisitesExpanded: [
                  {
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
                number: "125",
                prerequisites: ["HON 124"],
                prerequisitesExpanded: [
                  {
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
];

const flattern = (arr) => {
  return arr.reduce(function (a, b) {
    return a.concat(b);
  }, []);
};

const convertPrerequisiteTreeTorows = (ParentCourse) => {
  const createChildRowfromParentRow = (parentRow) => {
    console.log(parentRow);

    const row = {
      courses: flattern(
        parentRow.courses.map(
          (rowCourses) => rowCourses["prerequisitesExpanded"]
        )
      ),
    };
    //debugger;
    if (row.courses.find((Course) => Course.prerequisitesExpanded.length > 0)) {
      log("convertPrerequisiteTreeTorows", row, "row1");
      return [row].concat(createChildRowfromParentRow(row));
    }
    return [row];
  };

  //debugger;
  //console.log(ParentCourse);

  const row1 = { courses: [ParentCourse] };
  log("convertPrerequisiteTreeTorows", row1, "row1");
  return [row1].concat(createChildRowfromParentRow(row1));
};

// const convertPrerequisiteTreeTorows = (ParentCourse) => {

//     const createChildRowfromParentRow = (parentRow) => {
//       const row = flattern(
//         parentRow.map((rowCourses) => rowCourses["prerequisitesExpanded"])
//       );
//       if (row.find((Course) => Course.prerequisitesExpanded.length > 0)) {
//         return [row].concat(createChildRowfromParentRow(row));
//       }
//       return row;
//     };

//   //debugger;
//   //console.log(ParentCourse);

//   const row1 = [ParentCourse];
//   log("convertPrerequisiteTreeTorows", row1, "row1");

//   // console.log("row1-->");
//   // console.log(row1);
//   // console.table(row1);

//   //  console.log('Diff between ParentCourse and [ParentCourse]')
//   //   console.log(ParentCourse)
//   //   console.log([ParentCourse])
//   // const row2 = ParentCourse["prerequisitesExpanded"];
//   // log("convertPrerequisiteTreeTorows", row2, "row2");
//   const row2 = flattern(
//     row1.map((rowCourses) => rowCourses["prerequisitesExpanded"])
//   );
//   // console.log("row2-->");
//   // console.log(row2);
//   // const row22 = ParentCourse.prerequisitesExpanded;
//   // console.log("row22-->");
//   // console.log(row22);

//   const row3 = flattern(
//     row2.map((rowCourses) => rowCourses["prerequisitesExpanded"])
//   );

//   log("convertPrerequisiteTreeTorows", row3, "row3");

//   const row4 = flattern(
//     row3.map((rowCourses) => rowCourses["prerequisitesExpanded"])
//   );

//   log("convertPrerequisiteTreeTorows", row4, "row4");

//   //
//   // const rows = [row1].concat(createChildRowfromParentRow(row1))
//   //   console.log("convertPrerequisiteTreeTorows");
//   //   console.log("row1" + row1);
//   return [row1, row2, row3, row4];
//   // return [
//   //     ["FIN 408"],
//   //     ["FIN 307","FIN 303","FIN 305"],
//   //     ["FIN 201","FIN 202"]
//   // ]

//   //return rows
// };

// const convertPrerequisiteTreeTorows = (ParentCourse) => {
//   const createChildRowfromParentRow = (parentRow) => {
//     const row = flattern(
//       parentRow.map((rowCourses) => rowCourses["prerequisitesExpanded"])
//     );
//     if (row.find((Course) => Course.prerequisitesExpanded.length > 0)) {
//       return [row].concat(createChildRowfromParentRow(row));
//     }
//     return row;
//   };

//   //debugger;
//   const row1 = [ParentCourse];
//   //  console.log('Diff between ParentCourse and [ParentCourse]')
//   //   console.log(ParentCourse)
//   //   console.log([ParentCourse])
//   //const row2 = ParentCourse["prerequisitesExpanded"];
//    const rows = [row1].concat(createChildRowfromParentRow(row1))
//   //   console.log("convertPrerequisiteTreeTorows");
//   //   console.log("row1" + row1);
//  // return [row1, row2];
//   // return [
//   //     ["FIN 408"],
//   //     ["FIN 307","FIN 303","FIN 305"],
//   //     ["FIN 201","FIN 202"]
//   // ]

//   return rows
// };
const OrgChartNode = ({ Course }) => {
  return (
    <div
      className="node"
      onClick={() => alert(Course.subject + Course.number + " is clicked.")}
    >
      {/* console.log(Course)
        {'asad'} */}
      {/* {Course.subject + " " + Course.number + " " + Course.title} */}
      {Course.subject} {Course.number}
      {/* {Course.title} */}
    </div>
  );
};

const OrgChartChinaNode = ({ Course }) => {
  return (
    <div
      className="node"
      onClick={() => alert("Hello my name is : " + Course.name)}
    >
      {/* console.log(Course)
        {'asad'} */}
      {/* {Course.subject + " " + Course.number + " " + Course.title} */}
      {Course.name}
      {/* {Course.title} */}
    </div>
  );
};

const OrgChart = ({ rows }) => {
  log("OrgChart", rows, "rows");

  const rowNodes = rows.map((row, index) => (
    // console.log(rows)
    <div className="orgChartRow">
      {index} ({row.length}) :
      {row.courses.map((Course) => (
        <OrgChartNode Course={Course} />
        //console.log(Course)
      ))}
    </div>
  ));

  return (
    <div className="orgChart">
      <h1>Responsive Organization chart</h1>
      {rowNodes}
    </div>
  );
};

const OrgChartRecursive = ({ title, tree, NodeComponent }) => {
  log(title, tree, "tree");
  const renderChildren = (node) => {
    // <div className="childGroup">
    const children = (node.children || []).map((child) => (
      // <td colSpan="2">{node.children.map(renderChildren)}</td>
      <td colSpan="2">{renderChildren(child)}</td>
    ));

    return (
      <table className="childGroup">
        <tr>
          <td className="nodeCell" colSpan="6">
            <NodeComponent Course={node} />
            {/* {node.children.map(renderChildren)} */}
          </td>
        </tr>
        <tr>{children}</tr>
      </table>
    );

    // </div>
  };
  //const parent = <OrgChartNode>course={tree}</OrgChartNode>;

  //const rowNodes = tree.children.map(renderChildren);
  // const rowNodes = renderChildren(tree);

  return (
    <div className="orgChart">
      <h1>{title}</h1>
      {renderChildren(tree)}
    </div>
  );
};

//  const [departmentList, setDepartmentList] = useState([]);

//  useEffect(() => {
//    CreateAPIEndPoint(END_POINTS.depar)
//      .fetchAll()
//      .then((res) => {
//        console.log(res.data);
//        setOrderList(res.data);
//      })
//      .catch((err) => console.log(err));
//  }, []);

class CourseController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
    };
  }
  componentDidMount() {
    // axios.get("https://api.npms.io/v2/search?q=react").then((response) => {
    //   alert(response.data);
    // });
    CreateAPIEndPoint(END_POINTS.DEPARTMENT)
      .fetchAll()
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0]);

        //setOrderList(res.data); =
      //  this.setState(res.data[0]);
        this.setState({departments: res.data[0]})

      })
      .catch((err) => console.log(err));
  }
  render() {
    // const flatrows = convertPrerequisiteTreeTorows(CoursePrerequisites[0]).map(
    //   (r) => ({
    //     ...r,
    //     length: r.courses.length,
    //   })
    // );

    // log("CourseController", flatrows, "flatrows");

    const mapToRecursive = (course) => ({
      ...course,
      children: course.prerequisitesExpanded.map(mapToRecursive),
    });
    // log(
    //   "CourseController",
    //   CoursePrerequisites.map(mapToRecursive),
    //   "CoursePrerequisites.map(mapToRecursive)"
    // );
    // log(
    //   "CourseController",
    //   CoursePrerequisites.map(mapToRecursive)[0],
    //   "CoursePrerequisites.map(mapToRecursive)[0]"
    // );
    const tree = CoursePrerequisites.map(mapToRecursive)[0];

    const workplaceOrgChart = {
      name: "Lao Lao",
      children: [
        {
          name: "Bo Miao",
          children: [],
        },
        {
          name: "So Miao",
          children: [
            {
              name: "Tie Hua",
              // children: [],
            },
            {
              name: "Hei Hua",
              children: [
                {
                  name: "Ping Pang",
                  // children: [],
                },
                {
                  name: "Xiang Xiang",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    };

    // log("CourseController", tree, "tree");
    console.log(workplaceOrgChart);
    console.log(this.state.departments);
    return (
      <div>
        {/* {'asad'} */}
        {/* <OrgChart rows={flatrows} /> */}
        <OrgChartRecursive
          title="Chart1"
          tree={tree}
          NodeComponent={OrgChartNode}
        />
        <OrgChartRecursive
          title="Chart2"
          tree={workplaceOrgChart}
          NodeComponent={OrgChartChinaNode}
        />
        {/* console.log(workplaceOrgChart); */}
        <OrgChartRecursive
          title="Chart3"
          tree={this.state.departments}
          NodeComponent={OrgChartChinaNode}
        />
        {/* {console.log(this.state.departments); */}
        {/* {console.log("OrgChart" + rows)}
        {console.log(rows)} */}
      </div>
    );
  }
}

export default CourseController;
