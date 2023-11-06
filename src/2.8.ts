{

    // promise
    type ToDO = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    const getTodo = async (): Promise<ToDO> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        // console.log(data);
        return data
    }

    getTodo()






    type Something = { something: string }


    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {

            const data: Something = { something: 'something' }

            if (data) {
                resolve(data)
            } else {
                reject('Faild to load data')
            }
        })
    }

    // calling create promise function

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise()
        return data
        // console.log(data);
    }

    showData()









}