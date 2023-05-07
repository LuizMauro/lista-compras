import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

type ListItem = {
  id: string;
  name: string;
  quantity: number;
  unitaryValue: number;
};

type ListOfList = {
  id: string;
  name: string;
  items: ListItem[];
};

export const getLists = async (): Promise<ListOfList[]> => {
  try {
    const value = await AsyncStorage.getItem("@lists");
    if (value !== null) {
      return JSON.parse(value) as ListOfList[];
    }

    return [] as ListOfList[];
  } catch (e) {
    return [] as ListOfList[];
  }
};

export const getListById = async (
  id: string
): Promise<ListOfList | undefined> => {
  const value = await AsyncStorage.getItem("@lists");
  if (value !== null) {
    const lists = JSON.parse(value) as ListOfList[];

    const exist = lists.find((el) => el.id === id);

    if (exist) {
      return exist;
    }
  }
};

export const createList = async (name: string): Promise<string> => {
  const lists = await getLists();

  const value: ListOfList = {
    id: uuidv4(),
    name,
    items: [],
  };

  lists.push(value);
  await AsyncStorage.setItem("@lists", JSON.stringify(lists));
  return value.id;
};

export const updateList = async (list: ListOfList): Promise<void> => {
  const lists = await getLists();

  lists.forEach((l) => {
    if (l.id === list.id) {
      l = list;
    }
  });

  await AsyncStorage.setItem("@lists", JSON.stringify(lists));
};

export const addItemInList = async (
  name: string,
  quantity: number,
  unitaryValue: number,
  listId: string
): Promise<void> => {
  const list = await getListById(listId);

  if (list) {
    list.items.push({
      id: uuidv4(),
      name,
      quantity,
      unitaryValue,
    });
    await updateList(list);
  }
};
