{

    //constraints



    const addCourseToStudent = <T extends { name: string; id: number, email: string }>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course,
        };
    };


    const student3 = addCourseToStudent({
        id: 644,
        name: 'Suuyel',
        email: 's@s.com'
    })



    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 54,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });

    const student2 = addCourseToStudent({
        id: 154,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });





















}