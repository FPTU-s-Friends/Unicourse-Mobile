import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { IVoucher } from "@screens/UserTransactionHistoryScreen";
import VoucherCardContainer from "../VoucherCardContainer/VoucherCardContainer.android";

export type ISectionParams = {
  title: string;
  data: IVoucher[];
};
const VoucherContainer = ({
  section_obj,
}: {
  section_obj: ISectionParams[];
}) => {
  return (
    <View style={styles.containerWrapper}>
      <SectionList
        sections={section_obj}
        keyExtractor={(item, index) => item._id + index}
        renderItem={({ item }: { item: IVoucher }) => {
          return <VoucherCardContainer item={item} />;
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontSize: 17, color: "#242222", fontWeight: "700" }}>
            {title}
          </Text>
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

export default VoucherContainer;

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: "absolute",
    right: 16,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
  container: {
    flex: 1,
    height: "100%",
  },
  containerWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#ECECEC ",
  },
});
