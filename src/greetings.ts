type GetGreetingsResponse = {
  greetings: Array<string>;
};

// eslint-disable-next-line import/prefer-default-export
export const handler = async (): Promise<GetGreetingsResponse> => {
  const greetings = ["hello world", "hej Rahul"];

  return {
    greetings,
  };
};
