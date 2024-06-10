import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import HTMLView from "react-native-htmlview";
import { textColor, textFont } from "../../constants";

// Import component
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  Alert,
} from "react-native";
import Header from "../../components/Blog/Header/Header";
import Author from "../../components/BlogDetail/Author/Author";
import Bottom from "../../components/BlogDetail/Bottom/Bottom";
import { blogsData } from "../../assets/data/blogData";
// import { Tags, Blogs, Blog } from "../../types";
import { Blog } from "../../models";


// IMPORT LOGIC STATE
import { RootContext } from "../../context/providers/AppProvider";
import { BLOG_ACTION } from "../../context/types/blog.types";

// IMPORT API SERVICES
import { useBlogService } from "../../core/services";
import LoadingOverlay from "../../components/Common/LoadingOverlay/LoadingOverlay";

const BlogDetailScreen = ({ route, navigation }: any) => {
  const { state, dispatch } = useContext(RootContext);
  const { id } = route.params;
  const blogs = blogsData;
  const [blog, setBlog] = useState({} as Blog);
  const [renderHtml, setRenderHtml] = useState("");

  // Behavior variables
  const [loading, setLoading] = useState(true);

  // API variables
  const { fetchBlogById } = useBlogService();

  // INIT DATA ZONE
  // Init blog data
  useEffect(() => {
    console.log("id", id);
    if (id) {
      const initBlogData = async (id: string) => {
        const initBlog = await fetchBlogById(id);
        if (initBlog && initBlog.status === 200 && initBlog.data.content) {
          setBlog({ ...initBlog.data } as Blog);
          dispatch({ type: BLOG_ACTION.FETCH_BLOG_DETAIL_INFO, payload: initBlog.data });
          const renderHtml = `${initBlog.data.content}`;
          setRenderHtml(renderHtml);
          setLoading(false);
        } else {
          setLoading(false);
          Alert.alert('Bài viết', 'Lỗi lấy thông tin bài viết', [
            {
              text: 'Cancel',
              onPress: () => navigation.goBack(),
              style: 'cancel',
            }
          ]);
        }
      };
      initBlogData(id);
    } else {
      setLoading(false);
      Alert.alert('Bài viết', 'Không tìm thấy bài viết', [
        {
          text: 'Cancel',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        }
      ]);
    }
  }, [id]);

  // BEHAVIOR ZONE
  // Function xử lý vấn đề quá nhiều space khi render HTML
  function trimNewLines(text: any) {
    if (!text) return;
    return text.replace(/(\r\n|\n|\r)/gm, "");
  }

  if (blog._id === undefined || loading) {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <LoadingOverlay visible={loading} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <ScrollView style={styles.bodyContainer}>
          <Author blog={blog} />
          {renderHtml ? (
            <View style={styles.container}>
              <HTMLView
                stylesheet={stylesheet}
                addLineBreaks={false}
                value={`${trimNewLines(renderHtml)}`}
              />
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
          <Bottom blog={blog} />
        </ScrollView>
    </SafeAreaView>
  );
};

// Style cho BlogDetailScreen
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Dimensions.get("window").height * 0.05,
    backgroundColor: "#fff"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
    backgroundColor: "#f7f8fc",
  },
});

// Style cho HTMLView
const stylesheet = StyleSheet.create({
  p: {
    textAlign: "justify",
    lineHeight: 30,
    fontSize: textFont.titleNormal,
  },
  h1: {
    fontSize: textFont.h1,
    lineHeight: 30,
    paddingBottom: 10,
  },
  h2: {
    fontSize: textFont.h2,
    lineHeight: 30,
    paddingBottom: 10,
  },
  h3: {
    fontSize: textFont.h3,
    lineHeight: 30,
    paddingBottom: 10,
  },
  h4: {
    fontSize: textFont.h4,
    lineHeight: 30,
  },
  h5: {
    fontSize: textFont.h5,
    lineHeight: 30,
  },
  pre: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    fontSize: textFont.titleNormal,
  },
  code: {
    color: "#333", // Text color
    fontFamily: "monospace",
    fontSize: textFont.titleNormal,
  },
  img: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: "auto",
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default BlogDetailScreen;
