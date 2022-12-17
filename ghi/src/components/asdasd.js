    const useScrollTest = () => {
        const [scrollTest, setScrollTest] = useState(window.pageYOffset);

        const onScrolling = () => {
            setScrollTest(window.pageYOffset);
        };

        useEffect(() => {
            window.addEventListener('scroll', onScrolling);
            return () => {
                window.removeEventListener('scroll', onScrolling);
            };
        }, []);

        const startThreshold = 1400; // distance from top of page where div should start moving
        const stopThreshold = 2000; // distance from top of page where div should stop moving
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        let divTop;
        if (scrollPosition < startThreshold) {
            divTop = startThreshold;
        } else if (scrollPosition > stopThreshold) {
            divTop = stopThreshold;
        } else {
            divTop = scrollPosition;
        }

        const divStyle = {
            transform: `translate3d(0%, calc(${divTop * 0.03}px - 0%), 0)`,
        };

        return { scrollTest, divStyle };
    };