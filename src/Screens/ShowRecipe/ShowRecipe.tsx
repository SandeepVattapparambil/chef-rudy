import React, { Component } from "react";

import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";

export default class ShowRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "ingredients",
    };
  }

  changeTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    let data = this.props.route.params.recipeData.recipe;
    return (
      <View style={styles.showRecipe}>
        <ImageBackground source={{ uri: `${data.image}` }} style={styles.headerImage}>
          <Image
            source={require("../../../assets/gradient.png")}
            style={styles.headerGradient}
          ></Image>
          <View style={styles.recipeImageContainer}>
            <Image source={{ uri: `${data.image}` }} style={styles.recipeImage}></Image>
          </View>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <View style={styles.detailsView}>
            <Text style={styles.recipeLabel}>{data.label}</Text>
            <Text style={styles.recipeSource}>{data.source}</Text>
          </View>
          <View style={styles.recipeQuickDetailsView}>
            <Text style={styles.quickDetailsChips}>{data.yield} Servings</Text>
            <Text style={styles.quickDetailsChips}>
              Preparation time: {data.totalTime} Mins
            </Text>
            <Text style={styles.quickDetailsChips}>
              Total Calories: {data.calories.toFixed(2)}
            </Text>
          </View>
          <View style={styles.RecipeInfoContainer}>
            <View style={styles.tabBar}>
              <TouchableOpacity onPress={(event) => this.changeTab("ingredients")}>
                <Text
                  style={
                    this.state.activeTab === "ingredients"
                      ? styles.sectionTitleActive
                      : styles.sectionTitle
                  }
                >
                  Ingredients
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(event) => this.changeTab("preparation")}>
                <Text
                  style={
                    this.state.activeTab === "preparation"
                      ? styles.sectionTitleActive
                      : styles.sectionTitle
                  }
                >
                  Preparation
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(event) => this.changeTab("nutrition")}>
                <Text
                  style={
                    this.state.activeTab === "nutrition"
                      ? styles.sectionTitleActive
                      : styles.sectionTitle
                  }
                >
                  Nutrition
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.ingredientsScroll}
            >
              {data.ingredientLines.map((item, key) => {
                return (
                  <Text key={key} style={styles.ingredient}>
                    {key + 1}) {item}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}