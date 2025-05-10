interface ApiClientParams {
  baseUrl: string;
}

const apiClient = ({ baseUrl }: ApiClientParams) => {
  return baseUrl;
};
