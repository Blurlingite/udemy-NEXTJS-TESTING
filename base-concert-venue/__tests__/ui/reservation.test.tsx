import { render, screen } from "@testing-library/react";

// eslint-disable-next-line import/no-unresolved
import { Reservation } from "@/components/reservations/Reservation";

test("reservation page shows correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);

  expect(seatCountText).toBeInTheDocument();
});
