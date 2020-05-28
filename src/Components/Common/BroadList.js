let broadList = [];

export const setBroadList = (data) => {
  data.seeAllBroadcasters.map((broad) =>
    broadList.push({
      name: broad.name,
      broadId: broad.broadId,
      avatar: broad.avatar,
    })
  );
  return broadList;
};

export const getBroadList = () => {
  return broadList;
};
