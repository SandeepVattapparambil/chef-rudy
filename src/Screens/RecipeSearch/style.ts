import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  searchBox: {
    height: 40,
    borderColor: "#f5f5f5",
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  imageContainer: {
    backgroundColor: "#0000",
    padding: 10,
  },
  rudy: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  primaryText: {
    fontSize: 19,
    color: "#6d4c41",
    fontWeight: "bold",
  },
  headerTextBoxContainer: {
    display: "flex",
    alignContent: "center",
    paddingTop: 40,
  },
  noResultsContainer: {
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  noResultsFound: {
    height: 200,
    width: 200,
  },
  noResultsText: {
    color: "#757575",
  },
  resultItemContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 22,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  resultImage: {
    height: 80,
    width: 80,
    borderRadius: 15,
  },
  resultImageContainer: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 5,
    borderRadius: 15,
  },
  textDataContainer: { flexShrink: 1 },
  itemName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#795548",
    paddingLeft: 15,
    flexShrink: 1,
  },
  sourceRow: { flexDirection: "row", paddingLeft: 15 },
  sourceIcon: { height: 15, width: 15, marginTop: 1 },
  sourceName: { fontSize: 12, paddingLeft: 3, color: "#9e9e9e", flexShrink: 1 },
  scrollResults: {
    flex: 1,
  },
});
