import axios from 'axios';

export const getAPI = async (parameter: any): Promise<any> => {
    return await axios({
        url: `https://tiki.vn/api/personalish/v1/blocks/listings`,
        method: 'get',
        params: { ...parameter },
    })
        .then((response) => {
            return {
                status: response.status,
                data: response.data,
            };
        })
        .catch((error) => {
            console.log(error);
            return {
                status: error.status,
                data: error.response,
            };
        });
};

export async function getData(parameter: any) {
    const res = await getAPI(parameter);
    const data = await res.data;
    return data;
}

// export async function getStaticProps() {
//     const data = await getData();

//     return { props: { data } };
// }
