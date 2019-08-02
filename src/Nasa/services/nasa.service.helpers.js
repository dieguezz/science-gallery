export function mapToItem(item) {
  const pic = item.links.find(link => link.render === "image").href;
  const date = new Date(item.date_created);
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  const formattedDate = `${dd}-${mm}-${yyyy}`;

  return {
    title: item.title,
    dateCreated: formattedDate,
    description: item.description,
    picture: pic,
    fullPicture: pic.replace("thumb", "orig"),
    id: item.nasa_id
  };
}
export function mapToListModel(input) {
  return {
    items: input.data.collection.items.map((item, index) =>
      mapToItem({ ...item.data[0], links: [...item.links] }, index)
    ),
    totalPages: Math.floor(input.data.collection.metadata.total_hits / 100)
  };
}
