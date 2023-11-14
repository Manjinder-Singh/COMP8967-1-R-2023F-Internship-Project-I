# COMP8967-1-R-2023F-Internship-Project-I

The "Multi-Objective Decision-Making (MODM)" of the "Climate Neutral" web application, is designed to assist users in making complex multi-objective decisions, particularly in the context of climate change and environmental sustainability. It helps individuals and organizations evaluate and select the most optimal scenario from various alternatives, taking into account multiple critical factors. Decision-making in these areas often involves intricate choices, with multiple factors and scenarios to consider. The MODM method streamlines this process, offering a systematic approach to analyze and recommend the best scenario based on different categories and their associated factors.

# Working Model of MODM:
MODM Analysis within the framework of Climate Neutral functions through a multi-step process:

    **Translation of Descriptive Categories:** Descriptive categories, including "Very Low," "Low," "Medium," "High," and "Very High," undergo a conversion into numerical equivalents for the sake of uniformity. This involves assigning numerical values such as 1 for "Low," 2.5 for "Low-Medium," 5 for "Medium," 7.5 for "Medium-High," and 10 for "High."

    **Standardization of Scenario Values:** The values corresponding to each scenario within a category are normalized using specific mathematical functions. In instances where a positive category direction is applicable, a linear score is calculated as ((min - x) / (max - min)) * 100. Conversely, for negative category direction, the linear score is computed as ((x - min) / (max - min)) * 100.

    As an additional layer, this normalization process ensures that the diverse range of scenario values is transformed into a consistent scale, facilitating a comprehensive comparative analysis.

    Scenario Ranking: Following the normalization phase, the application computes the sum total of all category values for each scenario. These summations then become the basis for ranking the scenarios in a descending order. This ranking system aids users in identifying and prioritizing the most favorable options.

    This strategic ranking not only simplifies decision-making but also offers a nuanced perspective on the scenarios, enhancing the overall usability of the MODM Analysis tool in Climate Neutral.

In essence, the MODM Analysis method seamlessly integrates numerical consistency, scenario normalization, and strategic ranking to empower users with a comprehensive and insightful approach to decision-making in the context of achieving climate neutrality.
