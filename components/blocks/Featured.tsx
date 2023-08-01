import Heading from "@/components/common/Heading";
import ComponentWrapper from "@/components/common/ComponentWrapper";

const Featured = () => {
  return (
    <ComponentWrapper customClass="inline-block">
      <Heading size="lg" type="h2" color="primary">
        Featured
      </Heading>
      <div>
        Cards will go here
      </div>
    </ComponentWrapper>
  );
};

export default Featured;