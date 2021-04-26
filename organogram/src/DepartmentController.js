import React, { Component } from "react";
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
  //debugger;
  console.table(variable);
  console.log("\n");
  console.log(
    "%c ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    "color: brown; font-weight: bold; font-size:15px"
  );
  console.log("\n");
  console.log("\n");
}

const Departmentchildren = [
  {
    number: "480",
    children: ["FIN 303", "FIN 307", "FIN 345"],
    childrenExpanded: [
      {
        number: "307",
        children: ["FIN 301"],
        childrenExpanded: [
          {
            number: "301",
            children: ["ACC 201", "ACC 202", "HON 125"],
            childrenExpanded: [
              {
                number: "201",
                children: [],
                childrenExpanded: [],
                subject: "ACC",
                title: "Financial Accounting",
              },
              {
                number: "202",
                children: ["ACC 201"],
                childrenExpanded: [
                  {
                    number: "201",
                    children: [],
                    childrenExpanded: [],
                    subject: "ACC",
                    title: "Financial Accounting",
                  },
                ],
                subject: "ACC",
                title: "Managerial Accounting",
              },
              {
                number: "125",
                children: ["HON 124"],
                childrenExpanded: [
                  {
                    number: "124",
                    children: [],
                    childrenExpanded: [],
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
        children: ["FIN 301"],
        childrenExpanded: [
          {
            number: "301",
            children: ["ACC 201", "ACC 202", "HON 125"],
            childrenExpanded: [
              {
                number: "201",
                children: [],
                childrenExpanded: [],
                subject: "ACC",
                title: "Financial Accounting",
              },
              {
                number: "202",
                children: ["ACC 201"],
                childrenExpanded: [
                  {
                    children: [],
                    childrenExpanded: [],
                    subject: "ACC",
                    title: "Financial Accounting",
                  },
                ],
                subject: "ACC",
                title: "Managerial Accounting",
              },
              {
                number: "125",
                children: ["HON 124"],
                childrenExpanded: [
                  {
                    number: "124",
                    children: [],
                    childrenExpanded: [],
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
        children: ["FIN 301"],
        childrenExpanded: [
          {
            number: "301",
            children: ["ACC 201", "ACC 202", "HON 125"],
            childrenExpanded: [
              {
                number: "201",
                children: [],
                childrenExpanded: [],
                subject: "ACC",
                title: "Financial Accounting",
              },
              {
                number: "202",
                children: ["ACC 201"],
                childrenExpanded: [
                  {
                    number: "201",
                    children: [],
                    childrenExpanded: [],
                    subject: "ACC",
                    title: "Financial Accounting",
                  },
                ],
                subject: "ACC",
                title: "Managerial Accounting",
              },
              {
                number: "125",
                children: ["HON 124"],
                childrenExpanded: [
                  {
                    number: "124",
                    children: [],
                    childrenExpanded: [],
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

const convertPrerequisiteTreeTorows = (ParentDepartment) => {
  const createChildRowfromParentRow = (parentRow) => {
    console.log(parentRow);

    const row = {
      departments: flattern(
        parentRow.departments.map(
          (rowDepartments) => rowDepartments["childrenExpanded"]
        )
      ),
    };
    //debugger;
    if (
      row.departments.find(
        (Department) => Department.childrenExpanded.length > 0
      )
    ) {
      log("convertPrerequisiteTreeTorows", row, "row1");
      return [row].concat(createChildRowfromParentRow(row));
    }
    return [row];
  };

  //debugger;
  //console.log(ParentDepartment);

  const row1 = { departments: [ParentDepartment] };
  log("convertPrerequisiteTreeTorows", row1, "row1");
  return [row1].concat(createChildRowfromParentRow(row1));
};

// const convertPrerequisiteTreeTorows = (ParentDepartment) => {

//     const createChildRowfromParentRow = (parentRow) => {
//       const row = flattern(
//         parentRow.map((rowDepartments) => rowDepartments["childrenExpanded"])
//       );
//       if (row.find((Department) => Department.childrenExpanded.length > 0)) {
//         return [row].concat(createChildRowfromParentRow(row));
//       }
//       return row;
//     };

//   //debugger;
//   //console.log(ParentDepartment);

//   const row1 = [ParentDepartment];
//   log("convertPrerequisiteTreeTorows", row1, "row1");

//   // console.log("row1-->");
//   // console.log(row1);
//   // console.table(row1);

//   //  console.log('Diff between ParentDepartment and [ParentDepartment]')
//   //   console.log(ParentDepartment)
//   //   console.log([ParentDepartment])
//   // const row2 = ParentDepartment["childrenExpanded"];
//   // log("convertPrerequisiteTreeTorows", row2, "row2");
//   const row2 = flattern(
//     row1.map((rowDepartments) => rowDepartments["childrenExpanded"])
//   );
//   // console.log("row2-->");
//   // console.log(row2);
//   // const row22 = ParentDepartment.childrenExpanded;
//   // console.log("row22-->");
//   // console.log(row22);

//   const row3 = flattern(
//     row2.map((rowDepartments) => rowDepartments["childrenExpanded"])
//   );

//   log("convertPrerequisiteTreeTorows", row3, "row3");

//   const row4 = flattern(
//     row3.map((rowDepartments) => rowDepartments["childrenExpanded"])
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

// const convertPrerequisiteTreeTorows = (ParentDepartment) => {
//   const createChildRowfromParentRow = (parentRow) => {
//     const row = flattern(
//       parentRow.map((rowDepartments) => rowDepartments["childrenExpanded"])
//     );
//     if (row.find((Department) => Department.childrenExpanded.length > 0)) {
//       return [row].concat(createChildRowfromParentRow(row));
//     }
//     return row;
//   };

//   //debugger;
//   const row1 = [ParentDepartment];
//   //  console.log('Diff between ParentDepartment and [ParentDepartment]')
//   //   console.log(ParentDepartment)
//   //   console.log([ParentDepartment])
//   //const row2 = ParentDepartment["childrenExpanded"];
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
const OrgChartNode = ({ Department }) => {
  return (
    <div className="node">
      {/* console.log(Department)
        {'asad'} */}
      {/* {Department.subject + " " + Department.number + " " + Department.title} */}
      {Department.subject} {Department.number}
      {/* {Department.title} */}
    </div>
  );
};
const OrgChart = ({ rows }) => {
  log("OrgChart", rows, "rows");

  const rowNodes = rows.map((row, index) => (
    // console.log(rows)
    <div className="orgChartRow">
      {index} ({row.length}) :
      {row.departments.map((Department) => (
        <OrgChartNode Department={Department} />
        //console.log(Department)
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

class DepartmentController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    // console.log("Departmentchildren-->log");
    // console.log(Departmentchildren);
    // console.log(Departmentchildren[0]);
    // console.log(Departmentchildren[1]);
    // console.log(Departmentchildren[2]);
    // console.table("Departmentchildren-->Table");
    // console.table(Departmentchildren);
    // console.table(Departmentchildren[0]);

    log(
      "DepartmentController",

      Departmentchildren[0],
      "Departmentchildren[0]"
    );

    const flatrows = convertPrerequisiteTreeTorows(Departmentchildren[0]).map(
      (r) => ({
        ...r,
        length: r.departments.length,
      })
    );

    // const mapToRecursive = (course) => ({
    //   ...course,
    //   children: course.childrenExpanded,
    // });

    log("DeparrtmentController", flatrows, "flatrows");
    return (
      <div>
        {/* {'asad'} */}
        <OrgChart rows={flatrows} />
        {/* {console.log("OrgChart" + rows)}
        {console.log(rows)} */}
      </div>
    );
  }
}

export default DepartmentController;
