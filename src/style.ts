import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  emptyContainer: {
    alignContent: "center",
  },
  emptyImage: {
    height: 200,
    width: 450,
    marginRight: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
  },
  container: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    backgroundColor: "#0000",
    padding: 10,
  },
  rudy: {
    height: 80,
    width: 80,
    marginRight: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
  },
  primaryText: {
    fontSize: 19,
    color: "#6d4c41",
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 15,
    color: "#aaa",
    fontWeight: "100",
  },
  headerTextBoxContainer: {
    display: "flex",
    alignContent: "center",
    paddingTop: 20,
  },
  recepieSearchText: {
    color: "#6d4c41",
    fontSize: 20,
    marginBottom: 20
  },
  nutritionAnalysisText: {
    color: "#6d4c41",
    fontSize: 20,
    marginBottom: 20
  },
  searchContainer: {
    padding: 20,
    backgroundColor: "#fff3e0",
    margin: 20,
    borderRadius: 15,
  }
});
