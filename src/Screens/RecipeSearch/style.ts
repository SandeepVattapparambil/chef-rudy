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
  toggleIcon: { height: 15, width: 15, backgroundColor: "#e0e0e0", borderRadius: 2 },
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
    marginTop: 10,
  },
  resultImage: {
    height: 90,
    width: 90,
    borderRadius: 15,
  },
  resultImageContainer: {
    backgroundColor: "#f5f5f5",
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
  healthLabelsContainer: {
    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: 15,
  },
  healthLabel: {
    fontSize: 10,
    marginRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#ffe0b2",
    color: "#5d4037",
    borderRadius: 22,
  },
  dietLabel: {
    fontSize: 10,
    marginRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#c8e6c9",
    color: "#1b5e20",
    borderRadius: 22,
  },
  cautionLabel: {
    fontSize: 10,
    marginRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#ffcdd2",
    color: "#b71c1c",
    borderRadius: 22,
  },
  gridViewContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: 15,
  },
  gridViewCard: {
    width: 185,
    margin: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 5,
    flexShrink: 1,
  },
  gridThumbnail: {
    width: 185,
    height: 185,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gridText: {
    margin: 10,
    fontSize: 13,
    fontWeight: "bold",
    color: "#795548",
  },
  gridSource: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: "#9e9e9e",
  },
});
