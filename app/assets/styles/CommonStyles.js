const CommonColors = {
  bgColor: "#ffffff",
  linkColor: "#0064FF",
  labelColor: "#092444",
  inputColor: "#EEF4FC",
  headerBackground: "#092444",
  deaderTabBackground: "#0064FF"
};

const CommonSize = {
  labelFontSize: 15,
  headerHeight: 50
};

const CommonPosition = {
  contentCenter: {
    justifyContent: "center",
    alignItems: "center"
  }
};

const CommonStyles = {
  area: {
    flex: 1,
    backgroundColor: CommonColors.bgColor
  },
  container: {
    flex: 1,
    backgroundColor: CommonColors.bgColor,
    // paddingHorizontal: 15
  },
  tabBarIcon: {
    width: 30,
    height: 30
  },
  inputGroup: {
    flexDirection: "column",
    marginVertical: 2
  },
  headerTitle: {
    fontSize: 25,
    color: CommonColors.labelColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  label: {
    color: CommonColors.labelColor,
    fontSize: CommonSize.labelFontSize,
    marginBottom: 5
  },
  labelLink: {
    color: CommonColors.linkColor,
    fontSize: CommonSize.labelFontSize,
    fontWeight: "bold"
  },
  inputBox: {
  },
  input: {
    backgroundColor: CommonColors.inputColor,
    height: 40,
    paddingHorizontal: 5
  },
  errorBox: {
    height: 35,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEFF85"
  },
  errorMessage: {
    color: "red",
    fontSize: 12
  },
  primaryButton: {
    borderRadius: 5,
    width: 250,
    height: 45
  },
  headerTab: {
    flexDirection: "row",
    backgroundColor: "#006AFE",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleTab: {
    color: CommonColors.bgColor,
    fontSize: 15,
    fontWeight: "bold",
    textAlign:'center'
  },
};

export { CommonStyles, CommonColors, CommonSize };
