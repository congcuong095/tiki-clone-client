import axios from 'axios';

export interface Parameter {
    limit?: any;
    include?: any;
    aggregations?: any;
    category?: any;
    page?: any;
    trackity_id?: any;
    urlKey?: any;
    brand?: any;
}

export const getAPI = async (parameter: Parameter): Promise<any> => {
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

export async function getData(parameter: Parameter) {
    const res = await getAPI(parameter);
    const data = await res.data;
    return data;
}

// export async function getStaticProps() {
//     const data = await getData();

//     return { props: { data } };
// }
