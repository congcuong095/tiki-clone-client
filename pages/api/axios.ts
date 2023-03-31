import axios from 'axios';

export interface Params {
    baseUrl: string;
    method: string;
    param: {
        limit?: any;
        include?: any;
        aggregations?: any;
        category?: any;
        page?: any;
        trackity_id?: any;
        urlKey?: any;
        brand?: any;
    };
}

export const getAPI = async (param: any): Promise<any> => {
    return await axios({
        ...param,
        url: `${param.baseUrl}`,
        params: param.param,
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

export async function getData(param: any) {
    const res = await getAPI(param);
    const data = await res.data;
    return data;
}

// export async function getStaticProps() {
//     const data = await getData();

//     return { props: { data } };
// }
