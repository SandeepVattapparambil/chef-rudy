import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
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
  searchBoxContainer: {
    backgroundColor: "#fff",
  },
  searchBox: {
    borderColor: "#f5f5f5",
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  healthLabelsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  healthLabel: {
    fontSize: 10,
    margin: 10,
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
    margin: 10,
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
    margin: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#ffcdd2",
    color: "#b71c1c",
    borderRadius: 22,
  },
  nutritionDetails: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  nutrientsLabel: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#eeeeee",
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 5,
    borderRadius: 5,
  },
  nutrientLabel: {
    fontSize: 10,
    color: "#bdbdbd",
  },
  nutrientValue: {
    fontSize: 15,
    color: "#616161",
  },
  analyzeControl: { flexDirection: "row", margin: 15 },
  addButton: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#e0e0e0",
    color: "#757575",
    borderRadius: 22,
    marginRight: 5,
    fontWeight: "bold",
  },
  servingCountText: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#e0e0e0",
    color: "#757575",
    fontWeight: "bold",
    borderRadius: 22,
  },
  reduceButton: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#e0e0e0",
    color: "#757575",
    borderRadius: 22,
    fontWeight: "bold",
    marginLeft: 5,
  },
  analyzeButton: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#ffcc80",
    color: "#bf360c",
    borderRadius: 22,
    marginLeft: 25,
    fontWeight: "bold",
  },
  resultScrollView: { flex: 1, paddingTop: 20 },
  nutritionSummary: {
    height: 200,
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 20,
  },
  pieChart: { height: 160, width: 160 },
  detailsView: { flexDirection: "row", marginLeft: 20 },
  pieChartDetailsText: { fontSize: 55, textAlignVertical: "bottom" },
  summaryItemView1: {
    marginRight: 20,
    backgroundColor: "#c5e1a5",
    padding: 10,
    borderRadius: 5,
  },
  summaryItemQuantity1: { fontSize: 20, color: "#4caf50", textAlign: "center" },
  summaryItemLabel1: { fontSize: 10, color: "#4caf50", textAlign: "center" },
  summaryItemView2: {
    marginRight: 20,
    backgroundColor: "#ef9a9a",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  summaryItemQuantity2: { fontSize: 20, color: "#b71c1c", textAlign: "center" },
  summaryItemLabel2: { fontSize: 10, color: "#b71c1c", textAlign: "center" },
  summaryItemView3: {
    marginRight: 20,
    backgroundColor: "#ffcc80",
    padding: 10,
    borderRadius: 5,
  },
  summaryItemQuantity3: { fontSize: 20, color: "#bf360c", textAlign: "center" },
  summaryItemLabel3: { fontSize: 10, color: "#bf360c", textAlign: "center" },
  subSummary: {
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 20,
  },
});
