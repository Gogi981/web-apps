const App = props => {
    return (
        <App>
            <Header>
                <MenuIcon></MenuIcon>
                <Logo ></Logo>
                <Search></Search>
                <Taskbar>
                    <Upload></Upload>
                    <Apps></Apps>
                    <Share></Share>
                    <SignIn></SignIn>
                </Taskbar>
            </Header>
            <Aside>
                <Sections>
                    <Category></Category>
                </Sections>
                <BestOf>
                    <Category></Category>
                </BestOf>
                <Browse></Browse>
                <SignIn>
                    <Text></Text>
                    <Button></Button>
                </SignIn>
                <Options>
                    <Category></Category>
                </Options>
                <About></About>
            </Aside>
            <Main>
                <RecommendedVideos>
                    <VideoCard>
                        <ThumbnailVideo></ThumbnailVideo>
                        <Title></Title>
                        <Uploader></Uploader>
                        <Info>
                            <NumberOfViews></NumberOfViews>
                            <PostingDate></PostingDate>
                        </Info>
                    </VideoCard>
                </RecommendedVideos>
                <RecommendedChanel>
                    <ChanelName></ChanelName>
                    <Subscribebutton></Subscribebutton>
                    <VideoCard>
                        <ThumbnailVideo></ThumbnailVideo>
                        <Title></Title>
                        <Uploader></Uploader>
                        <Info>
                            <NumberOfViews></NumberOfViews>
                            <PostingDate></PostingDate>
                        </Info>
                    </VideoCard>
                </RecommendedChanel>
            </Main>
        </App>
    )
}



